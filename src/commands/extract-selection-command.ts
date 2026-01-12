import { Editor, MarkdownView, Notice } from "obsidian";
import { NoteType } from "../types/note-types";
import { NoteTypeModal } from "../ui/modals/note-type-modal";
import { AliasInputModal } from "../ui/modals/alias-input-modal";
import type PageZettelPlugin from "../main";
import { t } from "../i18n";

export async function extractSelection(
	plugin: PageZettelPlugin,
	editor: Editor,
	view: MarkdownView,
): Promise<void> {
	// 1. 選択テキストを取得
	const selection = editor.getSelection();

	if (!selection || selection.trim() === "") {
		new Notice(t("notices.selectText"));
		return;
	}

	// 2. ノートタイプを選択
	const modal = new NoteTypeModal(
		plugin.app,
		(type: NoteType) => {
			void showAliasInputOrCreate(plugin, editor, view, selection, type);
		},
		["fleeting", "literature", "permanent"], // 切り出し時の選択肢
	);

	modal.open();
}

async function showAliasInputOrCreate(
	plugin: PageZettelPlugin,
	editor: Editor,
	view: MarkdownView,
	selection: string,
	type: NoteType,
): Promise<void> {
	// 設定確認: showAliasInputフラグ
	const showAliasInput = plugin.settings[type].showAliasInput;

	if (!showAliasInput) {
		// showAliasInput=falseの場合、AliasInputModalをスキップしてノート作成
		await createNoteFromSelection(plugin, editor, view, selection, type, "", false);
		return;
	}

	// showAliasInput=trueの場合、AliasInputModalを表示
	const aliasModal = new AliasInputModal(
		plugin.app,
		plugin,
		(result) => {
			void createNoteFromSelection(
				plugin,
				editor,
				view,
				selection,
				type,
				result.alias,
				result.removeIndent,
			);
		},
		true, // Extract時なのでremoveIndentチェックボックスを表示
	);

	aliasModal.open();
}

async function createNoteFromSelection(
	plugin: PageZettelPlugin,
	editor: Editor,
	view: MarkdownView,
	selection: string,
	type: NoteType,
	alias: string,
	removeIndent: boolean,
): Promise<void> {
	// 3. インデント削除処理（removeIndent=trueの場合）
	let content = selection;
	if (removeIndent) {
		content = removeCommonIndent(selection);
	}

	// 4. タイトルを生成（エイリアスがあればそれを使用、なければ最初の行）
	let title: string;
	if (alias && alias.trim() !== "") {
		title = alias;
	} else {
		const firstLine = (content.split("\n")[0] || content).trim();
		title = firstLine.length > 40 ? firstLine.slice(0, 40) + "..." : firstLine;
	}

	// 5. ノートを作成
	const sourceFile = plugin.app.workspace.getActiveFile();

	const newFile = await plugin.noteManager.createNote({
		title,
		type,
		content,
		sourceFile: sourceFile || undefined,
	});

	// 6. 元ノートにリンクを挿入（設定で有効な場合）
	if (plugin.settings.behavior.insertLinkAfterExtract) {
		const link = `[[${newFile.basename}]]`;
		editor.replaceSelection(link);
	}

	// 7. 新規ノートを開く
	await plugin.app.workspace.openLinkText(newFile.path, "");
}

/**
 * 共通インデントを削除
 */
function removeCommonIndent(text: string): string {
	const lines = text.split("\n");
	if (lines.length === 0) return text;

	// 空行を除外して最小インデントを計算
	const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
	if (nonEmptyLines.length === 0) return text;

	const minIndent = Math.min(
		...nonEmptyLines.map((line) => {
			const match = line.match(/^(\s*)/);
			return match?.[1]?.length ?? 0;
		}),
	);

	// 各行から共通インデントを削除
	return lines.map((line) => line.slice(minIndent)).join("\n");
}
