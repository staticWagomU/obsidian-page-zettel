import { App } from "obsidian";
import { NoteType, NOTE_TYPE_CONFIG } from "../types/note-types";
import type { DailyZettelSettings } from "../types/settings";

export class FolderService {
	private app: App;
	private settings: DailyZettelSettings;

	constructor(app: App, settings: DailyZettelSettings) {
		this.app = app;
		this.settings = settings;
	}

	/**
	 * ノートタイプに対応するフォルダパスを取得
	 */
	getFolderPath(type: NoteType): string {
		return this.settings.folders.typeFolders[type] || NOTE_TYPE_CONFIG[type].folder;
	}

	/**
	 * フォルダが存在することを確認し、なければ作成
	 */
	async ensureFolderExists(type: NoteType): Promise<string> {
		const folderPath = this.getFolderPath(type);

		const existing = this.app.vault.getAbstractFileByPath(folderPath);

		if (!existing) {
			await this.app.vault.createFolder(folderPath);
		}

		return folderPath;
	}

	/**
	 * 全ノートタイプとテンプレートフォルダを初期化
	 * プラグイン初回起動時にフォルダ構造を自動生成
	 */
	async initializeAllFolders(): Promise<void> {
		// 全NoteTypeに対してフォルダを作成
		const noteTypes: NoteType[] = ["fleeting", "literature", "permanent", "structure", "index"];

		for (const type of noteTypes) {
			await this.ensureFolderExists(type);
		}

		// テンプレートフォルダを作成
		const templateFolder = this.settings.folders.templateFolder;
		const existing = this.app.vault.getAbstractFileByPath(templateFolder);
		if (!existing) {
			await this.app.vault.createFolder(templateFolder);
		}
	}
}
