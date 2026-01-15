/**
 * 絵文字カタログ
 * ノート管理に適した絵文字を厳選
 */

/**
 * 絵文字カテゴリ
 */
export type EmojiCategory =
	| "thinking" // 思考・アイデア
	| "knowledge" // 知識・学習
	| "organization" // 整理・管理
	| "status" // 状態・進捗
	| "nature" // 自然・象徴
	| "objects" // オブジェクト
	| "symbols"; // 記号

/**
 * 絵文字アイテムの型定義
 */
export interface EmojiItem {
	/** 絵文字文字列 */
	emoji: string;
	/** 表示名 */
	name: string;
	/** 検索用キーワード（英語・日本語両方） */
	keywords: string[];
	/** カテゴリ */
	category: EmojiCategory;
}

/**
 * ノート管理に適した厳選絵文字カタログ（約80個）
 */
export const EMOJI_CATALOG: EmojiItem[] = [
	// Thinking / Ideas (思考・アイデア) - Fleeting向け
	{
		emoji: "💭",
		name: "Thought Bubble",
		keywords: ["thought", "thinking", "idea", "思考", "考え", "アイデア"],
		category: "thinking",
	},
	{
		emoji: "💡",
		name: "Light Bulb",
		keywords: ["idea", "insight", "lightbulb", "ひらめき", "アイデア", "発見"],
		category: "thinking",
	},
	{
		emoji: "🧠",
		name: "Brain",
		keywords: ["brain", "thinking", "mind", "脳", "思考", "頭脳"],
		category: "thinking",
	},
	{
		emoji: "⚡",
		name: "Lightning",
		keywords: ["flash", "quick", "spark", "電撃", "閃光", "素早い"],
		category: "thinking",
	},
	{
		emoji: "✨",
		name: "Sparkles",
		keywords: ["sparkle", "new", "fresh", "キラキラ", "新しい"],
		category: "thinking",
	},
	{
		emoji: "🌟",
		name: "Glowing Star",
		keywords: ["star", "important", "highlight", "星", "重要", "輝き"],
		category: "thinking",
	},
	{
		emoji: "💫",
		name: "Dizzy",
		keywords: ["spark", "idea", "dizzy", "閃き", "思いつき"],
		category: "thinking",
	},
	{
		emoji: "🔮",
		name: "Crystal Ball",
		keywords: ["crystal", "future", "predict", "水晶", "予測", "将来"],
		category: "thinking",
	},
	{
		emoji: "🎯",
		name: "Bullseye",
		keywords: ["target", "goal", "focus", "的", "目標", "焦点"],
		category: "thinking",
	},

	// Knowledge / Learning (知識・学習) - Literature向け
	{
		emoji: "📚",
		name: "Books",
		keywords: ["books", "library", "reading", "本", "図書", "読書"],
		category: "knowledge",
	},
	{
		emoji: "📖",
		name: "Open Book",
		keywords: ["book", "reading", "open", "本", "読む", "開いた本"],
		category: "knowledge",
	},
	{
		emoji: "📕",
		name: "Closed Book",
		keywords: ["book", "red", "closed", "本", "赤い本"],
		category: "knowledge",
	},
	{
		emoji: "📗",
		name: "Green Book",
		keywords: ["book", "green", "本", "緑の本"],
		category: "knowledge",
	},
	{
		emoji: "📘",
		name: "Blue Book",
		keywords: ["book", "blue", "本", "青い本"],
		category: "knowledge",
	},
	{
		emoji: "📙",
		name: "Orange Book",
		keywords: ["book", "orange", "本", "オレンジの本"],
		category: "knowledge",
	},
	{
		emoji: "📰",
		name: "Newspaper",
		keywords: ["news", "article", "paper", "新聞", "記事", "ニュース"],
		category: "knowledge",
	},
	{
		emoji: "📄",
		name: "Document",
		keywords: ["document", "page", "paper", "文書", "ページ", "書類"],
		category: "knowledge",
	},
	{
		emoji: "📝",
		name: "Memo",
		keywords: ["memo", "note", "write", "メモ", "ノート", "書く"],
		category: "knowledge",
	},
	{
		emoji: "🎓",
		name: "Graduation Cap",
		keywords: ["graduation", "education", "学位", "卒業", "教育"],
		category: "knowledge",
	},
	{
		emoji: "🔬",
		name: "Microscope",
		keywords: ["science", "research", "顕微鏡", "科学", "研究"],
		category: "knowledge",
	},
	{
		emoji: "🔭",
		name: "Telescope",
		keywords: ["telescope", "explore", "望遠鏡", "探求", "探索"],
		category: "knowledge",
	},
	{
		emoji: "🎧",
		name: "Headphones",
		keywords: ["audio", "podcast", "listen", "ヘッドフォン", "音声", "ポッドキャスト"],
		category: "knowledge",
	},
	{
		emoji: "🎬",
		name: "Clapper Board",
		keywords: ["video", "movie", "film", "動画", "映画", "ビデオ"],
		category: "knowledge",
	},
	{
		emoji: "🌐",
		name: "Globe",
		keywords: ["web", "internet", "global", "ウェブ", "インターネット", "グローバル"],
		category: "knowledge",
	},

	// Organization / Management (整理・管理) - Permanent向け
	{
		emoji: "💎",
		name: "Gem",
		keywords: ["gem", "diamond", "precious", "valuable", "宝石", "ダイヤ", "貴重", "価値"],
		category: "organization",
	},
	{
		emoji: "🏆",
		name: "Trophy",
		keywords: ["trophy", "achievement", "win", "トロフィー", "達成", "勝利"],
		category: "organization",
	},
	{
		emoji: "🔑",
		name: "Key",
		keywords: ["key", "important", "access", "鍵", "重要", "キー"],
		category: "organization",
	},
	{
		emoji: "🗝️",
		name: "Old Key",
		keywords: ["key", "vintage", "unlock", "古い鍵", "解錠"],
		category: "organization",
	},
	{
		emoji: "📌",
		name: "Pushpin",
		keywords: ["pin", "important", "mark", "ピン", "重要", "マーク"],
		category: "organization",
	},
	{
		emoji: "📍",
		name: "Round Pushpin",
		keywords: ["location", "pin", "mark", "場所", "ピン", "マーク"],
		category: "organization",
	},
	{
		emoji: "🔖",
		name: "Bookmark",
		keywords: ["bookmark", "save", "mark", "ブックマーク", "保存", "しおり"],
		category: "organization",
	},
	{
		emoji: "🏷️",
		name: "Label",
		keywords: ["label", "tag", "category", "ラベル", "タグ", "カテゴリ"],
		category: "organization",
	},
	{
		emoji: "📁",
		name: "Folder",
		keywords: ["folder", "directory", "organize", "フォルダ", "整理", "ディレクトリ"],
		category: "organization",
	},
	{
		emoji: "📂",
		name: "Open Folder",
		keywords: ["folder", "open", "フォルダ", "開いた"],
		category: "organization",
	},
	{
		emoji: "🗂️",
		name: "Card Index",
		keywords: ["index", "organize", "cards", "zettel", "索引", "整理", "カード"],
		category: "organization",
	},
	{
		emoji: "📋",
		name: "Clipboard",
		keywords: ["clipboard", "list", "クリップボード", "リスト"],
		category: "organization",
	},
	{
		emoji: "🔗",
		name: "Link",
		keywords: ["link", "connect", "chain", "リンク", "接続", "つながり"],
		category: "organization",
	},
	{
		emoji: "⛓️",
		name: "Chains",
		keywords: ["chain", "connect", "linked", "チェーン", "連結", "つながり"],
		category: "organization",
	},

	// Status / Progress (状態・進捗)
	{
		emoji: "✅",
		name: "Check Mark",
		keywords: ["done", "complete", "check", "完了", "済み", "チェック"],
		category: "status",
	},
	{
		emoji: "⭐",
		name: "Star",
		keywords: ["star", "favorite", "important", "星", "お気に入り", "重要"],
		category: "status",
	},
	{
		emoji: "🌱",
		name: "Seedling",
		keywords: ["seed", "grow", "new", "young", "芽", "成長", "新しい", "若い"],
		category: "status",
	},
	{
		emoji: "🌿",
		name: "Herb",
		keywords: ["plant", "growing", "植物", "成長中"],
		category: "status",
	},
	{
		emoji: "🌳",
		name: "Tree",
		keywords: ["tree", "mature", "established", "木", "成熟", "確立"],
		category: "status",
	},
	{
		emoji: "🔥",
		name: "Fire",
		keywords: ["fire", "hot", "urgent", "炎", "熱い", "緊急"],
		category: "status",
	},
	{
		emoji: "❄️",
		name: "Snowflake",
		keywords: ["cold", "frozen", "pause", "冷たい", "凍結", "一時停止"],
		category: "status",
	},
	{
		emoji: "⏳",
		name: "Hourglass",
		keywords: ["time", "waiting", "pending", "時間", "待機", "保留"],
		category: "status",
	},
	{
		emoji: "⌛",
		name: "Hourglass Done",
		keywords: ["time", "done", "complete", "時間", "完了"],
		category: "status",
	},
	{
		emoji: "🔄",
		name: "Arrows Rotate",
		keywords: ["refresh", "update", "cycle", "更新", "サイクル", "回転"],
		category: "status",
	},

	// Nature / Symbolic (自然・象徴)
	{
		emoji: "🌸",
		name: "Cherry Blossom",
		keywords: ["flower", "spring", "beauty", "桜", "春", "美しい"],
		category: "nature",
	},
	{
		emoji: "🌺",
		name: "Hibiscus",
		keywords: ["flower", "tropical", "花", "トロピカル"],
		category: "nature",
	},
	{
		emoji: "🍀",
		name: "Four Leaf Clover",
		keywords: ["luck", "clover", "fortune", "幸運", "クローバー"],
		category: "nature",
	},
	{
		emoji: "🌙",
		name: "Crescent Moon",
		keywords: ["moon", "night", "月", "夜"],
		category: "nature",
	},
	{
		emoji: "☀️",
		name: "Sun",
		keywords: ["sun", "day", "bright", "太陽", "日", "明るい"],
		category: "nature",
	},
	{
		emoji: "🌈",
		name: "Rainbow",
		keywords: ["rainbow", "colorful", "虹", "カラフル"],
		category: "nature",
	},
	{
		emoji: "💧",
		name: "Droplet",
		keywords: ["water", "drop", "水", "滴"],
		category: "nature",
	},
	{
		emoji: "🔷",
		name: "Blue Diamond",
		keywords: ["diamond", "blue", "shape", "青いダイヤ", "形"],
		category: "nature",
	},
	{
		emoji: "🔶",
		name: "Orange Diamond",
		keywords: ["diamond", "orange", "shape", "オレンジダイヤ", "形"],
		category: "nature",
	},

	// Objects (オブジェクト)
	{
		emoji: "🎨",
		name: "Palette",
		keywords: ["art", "creative", "design", "アート", "創作", "デザイン"],
		category: "objects",
	},
	{
		emoji: "✏️",
		name: "Pencil",
		keywords: ["pencil", "write", "draw", "鉛筆", "書く", "描く"],
		category: "objects",
	},
	{
		emoji: "🖊️",
		name: "Pen",
		keywords: ["pen", "write", "ペン", "書く"],
		category: "objects",
	},
	{
		emoji: "🖋️",
		name: "Fountain Pen",
		keywords: ["pen", "fountain", "write", "万年筆", "書く"],
		category: "objects",
	},
	{
		emoji: "💻",
		name: "Laptop",
		keywords: ["computer", "laptop", "work", "パソコン", "ラップトップ", "仕事"],
		category: "objects",
	},
	{
		emoji: "⌨️",
		name: "Keyboard",
		keywords: ["keyboard", "type", "キーボード", "入力"],
		category: "objects",
	},
	{
		emoji: "🗃️",
		name: "Card File Box",
		keywords: ["archive", "storage", "box", "アーカイブ", "保管", "箱"],
		category: "objects",
	},
	{
		emoji: "📦",
		name: "Package",
		keywords: ["box", "package", "container", "箱", "パッケージ", "コンテナ"],
		category: "objects",
	},
	{
		emoji: "🧩",
		name: "Puzzle Piece",
		keywords: ["puzzle", "piece", "connect", "パズル", "ピース", "接続"],
		category: "objects",
	},
	{
		emoji: "🎪",
		name: "Circus Tent",
		keywords: ["tent", "event", "special", "テント", "イベント", "特別"],
		category: "objects",
	},

	// Symbols (記号)
	{
		emoji: "❗",
		name: "Exclamation",
		keywords: ["important", "alert", "重要", "警告", "注意"],
		category: "symbols",
	},
	{
		emoji: "❓",
		name: "Question",
		keywords: ["question", "unknown", "質問", "不明", "疑問"],
		category: "symbols",
	},
	{
		emoji: "💬",
		name: "Speech Bubble",
		keywords: ["comment", "talk", "speech", "コメント", "会話", "吹き出し"],
		category: "symbols",
	},
	{
		emoji: "🗨️",
		name: "Left Speech Bubble",
		keywords: ["comment", "speech", "コメント", "吹き出し"],
		category: "symbols",
	},
	{
		emoji: "🔔",
		name: "Bell",
		keywords: ["notification", "alert", "bell", "通知", "ベル", "アラート"],
		category: "symbols",
	},
	{
		emoji: "🔕",
		name: "Bell Slash",
		keywords: ["mute", "silent", "no notification", "ミュート", "消音"],
		category: "symbols",
	},
	{
		emoji: "♾️",
		name: "Infinity",
		keywords: ["infinity", "forever", "endless", "無限", "永遠"],
		category: "symbols",
	},
	{
		emoji: "➡️",
		name: "Right Arrow",
		keywords: ["arrow", "right", "next", "矢印", "右", "次"],
		category: "symbols",
	},
	{
		emoji: "⬆️",
		name: "Up Arrow",
		keywords: ["arrow", "up", "promote", "矢印", "上", "昇格"],
		category: "symbols",
	},
];

/**
 * デフォルトアイコンマッピング（NOTE_TYPE_CONFIGのフォールバック用）
 */
export const DEFAULT_NOTE_TYPE_ICONS: Record<string, string> = {
	fleeting: "💭",
	literature: "📚",
	permanent: "💎",
};
