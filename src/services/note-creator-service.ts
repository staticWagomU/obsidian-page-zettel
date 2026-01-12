import { App, TFile, Notice, moment } from "obsidian";
import { NoteType, NoteMetadata, NOTE_TYPE_CONFIG } from "../types/note-types";
import type { PageZettelSettings } from "../types/settings";
import { FrontmatterService } from "./frontmatter-service";
import { TemplateService } from "./template-service";
import { FolderService } from "./folder-service";
import { t } from "../i18n";

/**
 * ノート作成を統一的に扱うサービス
 * 各ノートタイプの設定に基づいてファイル名形式・フォルダ配置・テンプレート・フロントマターを管理
 */
export class NoteCreatorService {
	private app: App;
	private settings: PageZettelSettings;
	private frontmatterService: FrontmatterService;
	private templateService: TemplateService;
	private folderService: FolderService;

	constructor(
		app: App,
		settings: PageZettelSettings,
		folderService: FolderService,
		templateService: TemplateService,
		frontmatterService: FrontmatterService,
	) {
		this.app = app;
		this.settings = settings;
		this.folderService = folderService;
		this.templateService = templateService;
		this.frontmatterService = frontmatterService;
	}

	/**
	 * ファイル名を生成
	 * settings[type].fileNameFormatのプレースホルダーを展開
	 * - {{date}} -> YYYY-MM-DD
	 * - {{time}} -> HH:mm:ss
	 * - {{datetime}} -> YYYY-MM-DD HH:mm:ss
	 * - {{zettel-id}} -> YYYYMMDDHHmmss
	 * - {{title}} -> sanitized title
	 * - {{alias}} -> alias || title
	 */
	private generateFileName(type: NoteType, title: string, alias?: string): string {
		const format = this.settings[type].fileNameFormat;

		// タイトルのサニタイズ
		const sanitizedTitle = title.replace(/[\\/:*?"<>|]/g, "-").trim();

		// プレースホルダーの展開
		let fileName = format;

		// {{date}} -> YYYY-MM-DD
		fileName = fileName.replace(/\{\{date\}\}/g, moment().format("YYYY-MM-DD"));

		// {{time}} -> HH:mm:ss
		fileName = fileName.replace(/\{\{time\}\}/g, moment().format("HH:mm:ss"));

		// {{datetime}} -> YYYY-MM-DD HH:mm:ss
		fileName = fileName.replace(
			/\{\{datetime\}\}/g,
			moment().format("YYYY-MM-DD HH:mm:ss"),
		);

		// {{zettel-id}} -> YYYYMMDDHHmmss (ISO形式から変換)
		fileName = fileName.replace(/\{\{zettel-id\}\}/g, moment().format("YYYYMMDDHHmmss"));

		// {{title}} -> sanitized title
		fileName = fileName.replace(/\{\{title\}\}/g, sanitizedTitle);

		// {{alias}} -> alias || title
		fileName = fileName.replace(/\{\{alias\}\}/g, alias || sanitizedTitle);

		// .md拡張子を追加
		return `${fileName}.md`;
	}
}
