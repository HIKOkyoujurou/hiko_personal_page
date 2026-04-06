import { useEffect, useState } from "react";

function SectionHeading({ children }) {
  return (
    <h2 className="mb-6 text-sm font-semibold tracking-[0.2em] text-stone-500">
      {children}
    </h2>
  );
}

function DetailLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block text-sm tracking-wide text-stone-600 underline underline-offset-4 hover:text-stone-900"
    >
      {children}
    </a>
  );
}

function PageFrame({ children }) {
  return (
    <div className="min-h-screen bg-stone-200 text-stone-900">
      <main className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-20">
        {children}
      </main>
    </div>
  );
}

export default function HikoPersonalSite() {
  const unavailableHref = "#/unavailable";

  const site = {
    title: "HIKO GAME",
    domain: "hikogame.com",
    intro: [
      "日本の個人インディーゲーム開発者ヒコのホームページ。",
      "現在は Mount Lomyst と Q-ban bot を開発中。",
    ],
    contactEmail: "hikokyoujurou@gmail.com",
  };

  const links = [
    { label: "X / Twitter", href: "https://x.com/HIKOkyoujurou" },
    { label: "Steam", href: "https://store.steampowered.com/curator/45513966" },
    { label: "itch.io", href: "https://hikokyoujurou.itch.io/" },
    { label: "note", href: "https://note.com/hikokyoujurou" },
    { label: "YouTube", href: "https://www.youtube.com/@hikogame9554" },
    { label: "BlueSky", href: "https://bsky.app/profile/hikogame.bsky.social" },
  ];

  const projects = [
    {
      slug: "mount-lomyst",
      title: "Mount Lomyst",
      status: "開発中",
      summary: "ジャンプなしのフックショット2Dアクションプラットフォーマー",
      description:
        "Mount Lomystはジャンプを使わない2Dアクションゲームです。代わりにプレイヤーはフックショットと崖登りを使って前人未踏のロミスト山へと挑みます。",
      image: "/images/mountLomyst_homepage.jpg",
      imageAlt: "Mount Lomyst key art",
      stores: [
        {
          label: "Steam",
          href: "https://store.steampowered.com/app/3689860/Mount_Lomyst/",
        },
      ],
      pressKit:
        "https://drive.google.com/drive/u/1/folders/1sKPDyLEhDnHDKzqIv1bYjXLeWiRAkSuz",
      trailer: "https://youtu.be/djHLVj2kdTw?si=kZ-zDIDLn0vvMUiv",
      platforms: ["PC"],
      mediaNotes:
        "必要なら補足を書く。発売時期、イベント出展、体験版の有無など。",
    },
    {
      slug: "q-ban-bot",
      title: "Q-ban bot",
      status: "開発中 / 体験版公開中",
      summary: "壁に着くまで止まれないスライドパズル＋箱をくっつけて倉庫番風パズル",
      description:
        "Q-ban botは壁に着くまで止まれないスライドパズルに倉庫番風の箱を動かすパズルをくっつけたパズルゲームです。手が吸盤のタコ型ロボットとして、行方不明になった仲間たちを探してパズルであふれた島を探検していきます。",
      image: "/images/Qbanbot.jpg",
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
      mediaNotes:
        "必要なら補足を書く。アップデート状況、体験版、イベント出展など。",
    },
  ];

  const guideline = {
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

  const about = {
    body: [
      "日本在住個人ゲーム開発者のヒコです。",
      "プログラマー、ゲームデザイナー、アーティストなんでもやりますやれる範囲で。",
      "ゲームエンジンは何でも使いますが、個人のプロジェクトではDefold Engineを好んで使っています",
      "一番好きなゲームは『もぎたてチンクルのバラ色ルッピーランド』、映画は『愛、アムール』、マンガは『ダンジョン飯』です",
      ""
    ],
  };

  const [hash, setHash] = useState(window.location.hash || "#");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#");
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const projectSlug = hash.startsWith("#/projects/")
    ? hash.replace("#/projects/", "")
    : null;
  const activeProject = projects.find((project) => project.slug === projectSlug);

  if (activeProject) {
    return (
      <PageFrame>
        <DetailLink href="#">Back to home</DetailLink>

        <article className="mt-8">
          <img
            src={activeProject.image}
            alt={activeProject.imageAlt}
            className="aspect-square w-full rounded-2xl border border-stone-300 object-cover"
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {activeProject.title}
            </h1>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600">
              {activeProject.status}
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            {activeProject.summary}
          </p>

          <div className="mt-10 grid gap-10 border-t border-stone-300 pt-8 md:grid-cols-[2fr_1fr]">
            <div>
              <SectionHeading>Overview</SectionHeading>
              <p className="max-w-2xl text-base leading-8 text-stone-700">
                {activeProject.description}
              </p>
            </div>

            <aside className="space-y-8">
              <div>
                <SectionHeading>Store Links</SectionHeading>
                <div className="space-y-3">
                  {activeProject.stores.map((store) => (
                    <div key={store.label}>
                      <a
                        href={store.href}
                        className="text-base underline underline-offset-4 hover:text-stone-600"
                      >
                        {store.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading>Press Kit</SectionHeading>
                <a
                  href={activeProject.pressKit}
                  className="text-base underline underline-offset-4 hover:text-stone-600"
                >
                  Press Kit Link
                </a>
              </div>

              <div>
                <SectionHeading>Trailer</SectionHeading>
                <a
                  href={activeProject.trailer}
                  className="text-base underline underline-offset-4 hover:text-stone-600"
                >
                  Trailer Link
                </a>
              </div>

              <div>
                <SectionHeading>Platforms</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {activeProject.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </PageFrame>
    );
  }

  if (hash === "#/guidelines") {
    return (
      <PageFrame>
        <DetailLink href="#">Back to home</DetailLink>
        <section className="mt-8">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {guideline.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">
            {guideline.lead}
          </p>

          <div className="mt-12 space-y-10">
            {guideline.sections.map((section) => (
              <section
                key={section.title}
                className="border-t border-stone-300 pt-8"
              >
                <SectionHeading>{section.title}</SectionHeading>
                <ul className="max-w-3xl list-disc space-y-2 pl-6 text-base leading-8 text-stone-700">
                  {section.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </PageFrame>
    );
  }

  if (hash === "#/unavailable") {
    return (
      <PageFrame>
        <DetailLink href="#">Back to home</DetailLink>
        <section className="mt-8">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            リンク先がまだ設定されていません
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-8 text-stone-700">
            <p>このリンク先はまだ準備中です。ごめんなさい。</p>
            <p>後で公開したら、このページではなく正しいリンク先へ移動するようにします。</p>
          </div>
        </section>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <header className="mb-10 border-b border-stone-300 pb-8">
        <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
          {site.domain}
        </div>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          {site.title}
        </h1>
        <div className="mt-6 max-w-2xl space-y-2 text-base leading-8 text-stone-700 md:text-lg">
          {site.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </header>

      <nav className="mb-14 flex flex-wrap gap-x-6 gap-y-3 text-sm tracking-wide text-stone-600">
        <a
          href="#/guidelines"
          className="underline underline-offset-4 hover:text-stone-900"
        >
          実況・配信ガイドライン
        </a>
        <a
          href="#about"
          className="underline underline-offset-4 hover:text-stone-900"
        >
          About
        </a>
        <a
          href={`mailto:${site.contactEmail}`}
          className="underline underline-offset-4 hover:text-stone-900"
        >
          Contact
        </a>
        <a
          href="https://x.com/HIKOkyoujurou"
          className="underline underline-offset-4 hover:text-stone-900"
        >
          X / Twitter
        </a>
        <a
          href="https://hikokyoujurou.itch.io/"
          className="underline underline-offset-4 hover:text-stone-900"
        >
          itch.io
        </a>
      </nav>

      <section className="mb-20">
        <SectionHeading>Games</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-100"
            >
              <a href={`#/projects/${project.slug}`} className="block">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-square w-full object-cover transition duration-200 hover:scale-[1.02]"
                />
              </a>

              <div className="p-5">
                <div className="mb-3 text-sm tracking-wide text-stone-500">
                  {project.status}
                </div>
                <h2 className="text-2xl font-medium md:text-3xl">
                  <a
                    href={`#/projects/${project.slug}`}
                    className="hover:text-stone-600"
                  >
                    {project.title}
                  </a>
                </h2>
                <p className="mt-3 text-base leading-8 text-stone-700">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <DetailLink href={`#/projects/${project.slug}`}>
                    詳細を見る
                  </DetailLink>
                  <a
                    href={project.pressKit}
                    className="text-sm tracking-wide text-stone-600 underline underline-offset-4 hover:text-stone-900"
                  >
                    Press Kit
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20 border-t border-stone-300 pt-8">
        <SectionHeading>Links</SectionHeading>
        <div className="grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg underline underline-offset-4 hover:text-stone-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20 border-t border-stone-300 pt-8">
        <SectionHeading>Guidelines</SectionHeading>
        <p className="max-w-2xl text-base leading-8 text-stone-700">
          配信・動画投稿に関する方針をまとめています。実況や配信を行う前に確認してください。
        </p>
        <div className="mt-6">
          <DetailLink href="#/guidelines">ガイドラインを見る</DetailLink>
        </div>
      </section>

      <section id="about" className="border-t border-stone-300 pt-8">
        <SectionHeading>About</SectionHeading>
        <div className="max-w-3xl space-y-3 text-[15px] leading-7 text-stone-700 md:text-base">
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
