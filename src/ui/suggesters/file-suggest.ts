import { AbstractInputSuggest, App, TFile } from "obsidian";

export class FileSuggest extends AbstractInputSuggest<TFile> {
	private extension: string;
	private onSelectCallback?: (path: string) => void;

	constructor(app: App, inputEl: HTMLInputElement, extension = "md", onSelectCallback?: (path: string) => void) {
		super(app, inputEl);
		this.extension = extension;
		this.onSelectCallback = onSelectCallback;
	}

	protected getSuggestions(query: string): TFile[] {
		return this.app.vault
			.getFiles()
			.filter((file) => file.extension === this.extension)
			.filter((file) => file.path.toLowerCase().includes(query.toLowerCase()));
	}

	renderSuggestion(file: TFile, el: HTMLElement): void {
		el.setText(file.path);
	}

	selectSuggestion(file: TFile, _evt: MouseEvent | KeyboardEvent): void {
		this.setValue(file.path);
		this.onSelectCallback?.(file.path);
		this.close();
	}
}
