import { App, FuzzySuggestModal } from "obsidian";
import { NoteType, NOTE_TYPE_CONFIG, NoteTypeConfig } from "../../types/note-types";
import type { PageZettelSettings } from "../../types/settings";
import { getIconForNoteType } from "../../utils/icon-helper";
import { t } from "../../i18n";

interface NoteTypeOption {
	type: NoteType;
	config: NoteTypeConfig;
	icon: string;
}

export class NoteTypeModal extends FuzzySuggestModal<NoteTypeOption> {
	private onSelect: (type: NoteType) => void;
	private allowedTypes: NoteType[];
	private settings: PageZettelSettings;

	constructor(
		app: App,
		settings: PageZettelSettings,
		onSelect: (type: NoteType) => void,
		allowedTypes?: NoteType[],
	) {
		super(app);
		this.settings = settings;
		this.onSelect = onSelect;
		this.allowedTypes = allowedTypes ?? ["fleeting", "literature", "permanent"];

		this.setPlaceholder(t("modals.noteType.placeholder"));
		this.modalEl.addClass("page-zettel-modal");
	}

	getItems(): NoteTypeOption[] {
		return this.allowedTypes.map((type) => ({
			type,
			config: NOTE_TYPE_CONFIG[type],
			icon: getIconForNoteType(this.settings, type),
		}));
	}

	getItemText(item: NoteTypeOption): string {
		return `${item.icon} ${item.config.label}`;
	}

	renderSuggestion(item: { item: NoteTypeOption }, el: HTMLElement): void {
		const option = item.item;

		el.addClass("page-zettel-type-option");

		const container = el.createDiv({ cls: "page-zettel-type-container" });

		// アイコン（設定から取得）
		container.createSpan({
			text: option.icon,
			cls: "page-zettel-type-icon",
		});

		// テキスト部分
		const textContainer = container.createDiv({ cls: "page-zettel-type-text" });

		// ラベル
		textContainer.createDiv({
			text: option.config.label,
			cls: "page-zettel-type-label",
		});

		// 説明
		textContainer.createDiv({
			text: option.config.description,
			cls: "page-zettel-type-description",
		});
	}

	onChooseItem(item: NoteTypeOption): void {
		this.onSelect(item.type);
	}
}
