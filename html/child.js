/**
 * DESIRAY'S LIGHTS OF JOY — Individual Child Light Page
 * Renders /light/<slug> (rewritten to this file by vercel.json) using the
 * shared data in assets/data/children.js. Also works as child.html?c=<slug>
 * for local preview without the rewrite.
 */
document.addEventListener("DOMContentLoaded", () => {
  const children = window.DLOJ_CHILDREN || [];

  function getRequestedSlug() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("c") || params.get("child") || params.get("name") || params.get("slug");
    if (fromQuery) return fromQuery.toLowerCase();

    const path = window.location.pathname.replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    if (parts.length >= 2 && (parts[parts.length - 2] === "light" || parts[parts.length - 2] === "child")) {
      return decodeURIComponent(parts[parts.length - 1]).toLowerCase();
    }
    if (parts.length && (parts[0] === "light" || parts[0] === "child")) {
      return decodeURIComponent(parts[1] || "").toLowerCase();
    }
    return "";
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
  }

  function cardMarkup(child) {
    return `
      <a class="real-light-card" href="/light/${encodeURIComponent(child.slug)}">
        <img src="${child.img}" alt="${escapeHTML(child.alt)}" loading="lazy">
        <div class="real-light-name">${escapeHTML(child.name)}</div>
      </a>
    `;
  }

  const slug = getRequestedSlug();
  const index = children.findIndex((c) => (c.slug || "").toLowerCase() === slug);

  const notFoundSection = document.getElementById("childNotFound");
  const contentSection = document.getElementById("childContent");

  if (index === -1) {
    if (notFoundSection) notFoundSection.hidden = false;
    if (contentSection) contentSection.hidden = true;
    return;
  }

  const child = children[index];

  document.title = `${child.name}'s Light | Desiray's Lights of Joy`;
  const metaDesc = document.getElementById("pageDescription");
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      `Meet ${child.name}, a young warrior at Rady Children's Hospital who received a personalized neon light from Desiray's Lights of Joy.`
    );
  }

  const photo = document.getElementById("childPhoto");
  if (photo) {
    photo.src = child.img;
    photo.alt = child.alt;
  }

  const nameEl = document.getElementById("childName");
  if (nameEl) nameEl.textContent = child.name;

  const noteEl = document.getElementById("childNote");
  if (noteEl) noteEl.textContent = child.note;

  const founderBadge = document.getElementById("childFounderBadge");
  if (founderBadge) founderBadge.style.display = child.founder ? "inline-flex" : "none";

  const donateLink = document.getElementById("childDonateLink");
  if (donateLink) {
    const span = donateLink.querySelector("span");
    if (span) span.textContent = `Sponsor a Light Like ${child.name}'s`;
  }

  // Prev / Next (circular through the list)
  const prevChild = children[(index - 1 + children.length) % children.length];
  const nextChild = children[(index + 1) % children.length];

  const prevLink = document.getElementById("childPrevLink");
  const nextLink = document.getElementById("childNextLink");
  const prevName = document.getElementById("childPrevName");
  const nextName = document.getElementById("childNextName");

  if (prevLink) prevLink.href = `/light/${encodeURIComponent(prevChild.slug)}`;
  if (nextLink) nextLink.href = `/light/${encodeURIComponent(nextChild.slug)}`;
  if (prevName) prevName.textContent = prevChild.name;
  if (nextName) nextName.textContent = nextChild.name;

  // Explore more: next 6 children after this one, wrapping around
  const moreGrid = document.getElementById("childMoreGrid");
  if (moreGrid) {
    const more = [];
    for (let i = 1; i <= 6 && more.length < 6; i++) {
      const candidate = children[(index + i) % children.length];
      if (candidate.slug !== child.slug) more.push(candidate);
    }
    moreGrid.innerHTML = more.map(cardMarkup).join("");
  }

  if (contentSection) contentSection.hidden = false;
  if (notFoundSection) notFoundSection.hidden = true;
});
