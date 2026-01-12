import { App, TFile } from "obsidian";
import { FrontmatterService } from "./frontmatter-service";
import type { OrphanStats } from "../types";

export class OrphanDetectorService {
	private app: App;
	private frontmatterService: FrontmatterService;

	constructor(app: App) {
		this.app = app;
		this.frontmatterService = new FrontmatterService(app);
	}

	/**
	 * 孤立したPermanent Noteを取得
	 * 他のPermanentノートからマークダウンリンクで参照されていないノートを返す
	 */
	async getOrphanPermanentNotes(): Promise<TFile[]> {
		const allFiles = this.app.vault.getMarkdownFiles();
		const orphans: TFile[] = [];

		// 全Permanentノートを取得
		const permanentNotes: TFile[] = [];
		for (const file of allFiles) {
			const noteType = await this.frontmatterService.getNoteType(file);
			if (noteType === "permanent") {
				permanentNotes.push(file);
			}
		}

		// 各Permanentノートが他のノートから参照されているかチェック
		for (const permanentNote of permanentNotes) {
			let isReferenced = false;

			// 全マークダウンファイルのリンクをチェック
			for (const file of allFiles) {
				const cache = this.app.metadataCache.getFileCache(file);
				const links = cache?.links;

				if (links && links.length > 0) {
					// リンクのlinkTextがPermanentノートのbasenameと一致するか確認
					for (const link of links) {
						if (link.link === permanentNote.basename) {
							isReferenced = true;
							break;
						}
					}
				}

				if (isReferenced) {
					break;
				}
			}

			// 一度も参照されていない場合は孤立
			if (!isReferenced) {
				orphans.push(permanentNote);
			}
		}

		return orphans;
	}

	/**
	 * Permanent Noteの接続統計を取得
	 * @returns OrphanStats オブジェクト（total, orphans, connected, connectionRate）
	 */
	async getStats(): Promise<OrphanStats> {
		const allFiles = this.app.vault.getMarkdownFiles();
		let totalPermanentNotes = 0;

		// 全permanentノート数を取得
		for (const file of allFiles) {
			const noteType = await this.frontmatterService.getNoteType(file);
			if (noteType === "permanent") {
				totalPermanentNotes++;
			}
		}

		// 孤立ノート数を取得
		const orphanNotes = await this.getOrphanPermanentNotes();
		const orphanCount = orphanNotes.length;

		// 接続済みノート数を計算
		const connectedCount = totalPermanentNotes - orphanCount;

		// 接続率を計算（0除算対応）
		const connectionRate =
			totalPermanentNotes === 0 ? 0 : (connectedCount / totalPermanentNotes) * 100;

		return {
			total: totalPermanentNotes,
			orphans: orphanCount,
			connected: connectedCount,
			connectionRate: connectionRate,
		};
	}
}
