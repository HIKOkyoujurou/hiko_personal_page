import {
  about,
  guideline,
  links,
  projects,
  site,
  unavailableHref,
} from "./site-data.js";

const root = document.getElementById("root");

function render() {
  const hash = window.location.hash || "#";

  if (hash.startsWith("#/projects/")) {
    const slug = hash.replace("#/projects/", "");
    const project = projects.find((item) => item.slug === slug);
    if (project) {
      root.innerHTML = renderProjectPage(project);
      return;
    }
  }

  if (hash === "#/guidelines") {
    root.innerHTML = renderGuidelinesPage();
    return;
  }

  if (hash === unavailableHref) {
    root.innerHTML = renderUnavailablePage();
    return;
  }

  root.innerHTML = renderHomePage();

  if (hash === "#about" || hash === "#links") {
    const target = document.querySelector(hash);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" });
      });
    }
  }
}

function renderHomePage() {
  return `
    <div class="page-shell">
      <main class="page-frame">
        <header class="hero">
          <div class="eyebrow">${site.domain}</div>
          <h1 class="site-title">${site.title}</h1>
          <div class="intro-block">
            ${site.intro.map((line) => `<p>${line}</p>`).join("")}
          </div>
        </header>

        <nav class="top-nav">
          <a href="#/guidelines">実況・配信ガイドライン</a>
          <a href="#about">About</a>
          <a href="#links">Links</a>
          <a href="mailto:${site.contactEmail}">Contact: ${site.contactEmail}</a>
        </nav>

        <section class="section">
          <h2 class="section-heading">Games</h2>
          <div class="project-grid">
            ${projects.map(renderProjectCard).join("")}
          </div>
        </section>

        <section id="links" class="section section-lined">
          <h2 class="section-heading">Links</h2>
          <div class="link-grid">
            ${links
              .map(
                (link) =>
                  `<a class="text-link text-link-large" href="${link.href}">${link.label}</a>`
              )
              .join("")}
          </div>
        </section>

        <section class="section section-lined">
          <h2 class="section-heading">Guidelines</h2>
          <p class="body-copy">
            配信・動画投稿に関する方針をまとめています。実況や配信を行う前に確認してください。
          </p>
          <div class="section-actions">
            <a class="text-link" href="#/guidelines">ガイドラインを見る</a>
          </div>
        </section>

        <section id="about" class="section section-lined">
          <h2 class="section-heading">About</h2>
          <div class="about-copy">
            ${about.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card">
      <a class="project-image-link" href="#/projects/${project.slug}">
        <img
          class="project-image"
          src="${project.image}"
          alt="${project.imageAlt}"
        />
      </a>
      <div class="project-card-body">
        <div class="project-status">${project.status}</div>
        <h3 class="project-title">
          <a href="#/projects/${project.slug}">${project.title}</a>
        </h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-actions">
          <a class="text-link" href="#/projects/${project.slug}">詳細を見る</a>
          <a class="text-link" href="${project.pressKit}">Press Kit</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjectPage(project) {
  return `
    <div class="page-shell">
      <main class="page-frame">
        <a class="text-link" href="#">Back to home</a>
        <article class="project-detail">
          <img
            class="project-detail-image"
            src="${project.image}"
            alt="${project.imageAlt}"
          />
          <div class="project-detail-head">
            <h1 class="detail-title">${project.title}</h1>
            <span class="status-pill">${project.status}</span>
          </div>
          <p class="detail-summary">${project.summary}</p>

          <div class="detail-grid">
            <section>
              <h2 class="section-heading">Overview</h2>
              <div class="body-stack">
                ${project.description.map((line) => `<p>${line}</p>`).join("")}
              </div>
            </section>

            <aside class="detail-sidebar">
              <section>
                <h2 class="section-heading">Store Links</h2>
                <div class="sidebar-list">
                  ${project.stores
                    .map(
                      (store) =>
                        `<a class="text-link" href="${store.href}">${store.label}</a>`
                    )
                    .join("")}
                </div>
              </section>

              <section>
                <h2 class="section-heading">Press Kit</h2>
                <a class="text-link" href="${project.pressKit}">Press Kit Link</a>
              </section>

              <section>
                <h2 class="section-heading">Trailer</h2>
                <a class="text-link" href="${project.trailer}">Trailer Link</a>
              </section>

              <section>
                <h2 class="section-heading">Platforms</h2>
                <div class="platform-list">
                  ${project.platforms
                    .map((platform) => `<span class="status-pill">${platform}</span>`)
                    .join("")}
                </div>
              </section>
            </aside>
          </div>
        </article>
      </main>
    </div>
  `;
}

function renderGuidelinesPage() {
  return `
    <div class="page-shell">
      <main class="page-frame">
        <a class="text-link" href="#">Back to home</a>
        <section class="detail-page">
          <h1 class="detail-title">${guideline.title}</h1>
          <p class="body-copy wide">${guideline.lead}</p>
          <div class="guideline-stack">
            ${guideline.sections
              .map(
                (section) => `
                  <section class="section section-lined compact">
                    <h2 class="section-heading">${section.title}</h2>
                    <ul class="guideline-list">
                      ${section.body.map((line) => `<li>${line}</li>`).join("")}
                    </ul>
                  </section>
                `
              )
              .join("")}
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderUnavailablePage() {
  return `
    <div class="page-shell">
      <main class="page-frame">
        <a class="text-link" href="#">Back to home</a>
        <section class="detail-page">
          <h1 class="detail-title">リンク先がまだ設定されていません</h1>
          <div class="body-stack narrow">
            <p>このリンク先はまだ準備中です。ごめんなさい。</p>
            <p>公開したら、このページではなく正しいリンク先へ移動するようにします。</p>
          </div>
        </section>
      </main>
    </div>
  `;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
