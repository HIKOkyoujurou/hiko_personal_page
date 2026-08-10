export const site = {
  title: "HIKO GAME",
  domain: "hikogame.com",
  intro: [
    "日本の個人インディーゲーム開発者ヒコのホームページ。",
  ],
  contactEmail: "hikokyoujurou@gmail.com",
};

export const unavailableHref = "#/unavailable";

export const links = [
  { label: "X/Twitter", href: "https://x.com/HIKOkyoujurou" },
  { label: "Steam", href: "https://store.steampowered.com/curator/45513966" },
  { label: "itch.io", href: "https://hikokyoujurou.itch.io/" },
  { label: "note", href: "https://note.com/hikokyoujurou" },
  { label: "YouTube", href: "https://www.youtube.com/@hikogame9554" },
];

export const projects = [
  {
    slug: "mount-lomyst",
    title: "Mount Lomyst",
    status: "開発中",
    summary: "ジャンプなしのフックショット2Dアクションプラットフォーマー",
    description: [
      "Mount Lomystはジャンプを使わない2Dアクションゲームです。代わりにプレイヤーはフックショットと崖登りを使って前人未踏のロミスト山へと挑みます。",
    ],
    image: "./images/mountLomyst_homepage.jpg",
    imageAlt: "Mount Lomyst key art",
    stores: [
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/3689860/Mount_Lomyst/",
      },
      {
        label: "itch.io",
        href: unavailableHref,
      },
    ],
    pressKit:
      "https://drive.google.com/drive/u/1/folders/1sKPDyLEhDnHDKzqIv1bYjXLeWiRAkSuz",
    trailer: "https://youtu.be/djHLVj2kdTw?si=kZ-zDIDLn0vvMUiv",
    platforms: ["PC"],
  },
  {
    slug: "q-ban-bot",
    title: "Q-ban bot",
    status: "開発中 / 体験版公開中",
    summary: "壁に着くまで止まれないスライドパズル＋箱をくっつけて倉庫番風パズル",
    description: [
      "Q-ban botは壁に着くまで止まれないスライドパズルに倉庫番風の箱を動かすパズルをくっつけたパズルゲームです。手が吸盤のタコ型ロボットとして、行方不明になった仲間たちを探してパズルであふれた島を探検していきます。",
    ],
    image: "./images/Qbanbot.jpg",
    imageAlt: "Q-ban bot key art",
    stores: [
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/2846550/Qban_Bot/",
      },
    ],
    pressKit:
      "https://drive.google.com/drive/u/1/folders/1-YooBjY4OTNdCXSXZgWJWxzvc_3GuSap",
    trailer: "https://youtu.be/x_cBXicFvh0?si=v-A4UGj1aZ2N8boS",
    platforms: ["PC"],
  },
];

export const guideline = {
  title: "実況・配信ガイドライン",
  lead:
    "当ゲームの実況・配信を歓迎します。以下のルールを守って、お楽しみください。",
  sections: [
    {
      title: "配信・動画投稿について",
      body: [
        "実況・配信・収益化は自由に行っていただけます。",
        "動画のタイトルにゲーム名を含めてください。",
        "動画の概要欄に販売サイトのURLを記載してください。",
        "暴力的・差別的な文脈での利用は避けてください。",
      ],
    },
    {
      title: "禁止事項",
      body: [
        "誹謗中傷や、公序良俗に反する内容の配信・投稿。",
        "ゲームのイメージを著しく損なう行為。悪意ある編集や、誤解を招く内容の発信などを含みます。",
      ],
    },
  ],
};

export const about = {
  body: [
    "日本在住個人ゲーム開発者のヒコです。",
    "プログラマー、ゲームデザイナー、アーティストなんでもやりますやれる範囲で。",
    "ゲームエンジンは何でも使いますが、個人のプロジェクトではDefold Engineを好んで使っています",
    "一番好きなゲームは『もぎたてチンクルのバラ色ルッピーランド』、映画は『愛、アムール』、マンガは『ダンジョン飯』です",
  ],
};
