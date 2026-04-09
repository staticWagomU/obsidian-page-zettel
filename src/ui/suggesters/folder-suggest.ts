import { AbstractInputSuggest, App, TFolder } from "obsidian";

export class FolderSuggest extends AbstractInputSuggest<TFolder> {
	private onSelectCallback?: (path: string) => void;

	constructor(app: App, inputEl: HTMLInputElement, onSelectCallback?: (path: string) => void) {
		super(app, inputEl);
		this.onSelectCallback = onSelectCallback;
	}

	protected getSuggestions(query: string): TFolder[] {
		return this.app.vault
			.getAllLoadedFiles()
			.filter((file): file is TFolder => file instanceof TFolder)
			.filter((folder) => folder.path.toLowerCase().includes(query.toLowerCase()));
	}

	renderSuggestion(folder: TFolder, el: HTMLElement): void {
		el.setText(folder.path);
	}

	selectSuggestion(folder: TFolder, _evt: MouseEvent | KeyboardEvent): void {
		this.setValue(folder.path);
		this.onSelectCallback?.(folder.path);
		this.close();
	}
}
