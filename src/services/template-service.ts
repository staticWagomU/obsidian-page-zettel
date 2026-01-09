import { App } from "obsidian";
import { NoteType } from "../types/note-types";
import type { DailyZettelSettings } from "../types/settings";

export interface TemplateVariables {
	title: string;
	content?: string;
	date: string;
	[key: string]: string | undefined;
}

export class TemplateService {
	private app: App;
	private settings: DailyZettelSettings;

	constructor(app: App, settings: DailyZettelSettings) {
		this.app = app;
		this.settings = settings;
	}

	/**
	 * テンプレートを取得して変数を展開
	 */
	async getProcessedTemplate(type: NoteType, variables: TemplateVariables): Promise<string> {
		// For now, just return the content
		return variables.content || "";
	}
}
