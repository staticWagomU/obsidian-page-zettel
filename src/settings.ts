import { App, PluginSettingTab } from "obsidian";
import DailyZettelPlugin from "./main";
import type { DailyZettelSettings } from "./types/settings";
import { NOTE_TYPE_CONFIG } from "./types/note-types";

export const DEFAULT_SETTINGS: DailyZettelSettings = {
	folders: {
		typeFolders: {
			fleeting: NOTE_TYPE_CONFIG.fleeting.folder,
			literature: NOTE_TYPE_CONFIG.literature.folder,
			permanent: NOTE_TYPE_CONFIG.permanent.folder,
			structure: NOTE_TYPE_CONFIG.structure.folder,
			index: NOTE_TYPE_CONFIG.index.folder,
		},
		templateFolder: "Templates",
		dailyNoteFolder: "00-Inbox/Daily",
	},
	behavior: {
		insertLinkAfterExtract: true,
		suggestStructureOnPermanent: true,
		moveOnPromotion: true,
		fileNamePrefix: "date",
	},
	ui: {
		showEmojiInCommands: true,
		mobileOptimized: true,
	},
};

export class DailyZettelSettingTab extends PluginSettingTab {
	plugin: DailyZettelPlugin;

	constructor(app: App, plugin: DailyZettelPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		// Placeholder for settings UI
		containerEl.createEl("p", { text: "Settings will be added in future versions" });
	}
}
