/**
 * What We Do: builds the "Lights we have donated so far" grid from the shared data
 * in assets/data/children.js, so adding a young warrior there is the only edit needed.
 *
 * - The founder entry (Desiray) is the featured photo above the grid, so it is skipped here.
 * - Cards use the small copies in assets/images/what-we-do/thumbs/ (480px, .webp);
 *   the full-size photo stays for each child's own page.
 * - If a thumbnail or photo fails to load, the card falls back to the full photo and then to
 *   a name-only tile (class is-missing), so a missing file never shows as a broken image.
 * - The photo has alt="" on purpose: the visible name inside the same link already
 *   names it, and a screen reader would otherwise say both.
 */
(function () {
  var grid = document.getElementById("lightGrid");
  var kids = window.DLOJ_CHILDREN;
  if (!grid || !kids) return;

  function thumbOf(src) {
    return src.replace("/what-we-do/", "/what-we-do/thumbs/").replace(/\.\w+$/, ".webp");
  }

  var frag = document.createDocumentFragment();
  kids.forEach(function (kid) {
    if (kid.founder) return;

    var link = document.createElement("a");
    link.href = "/light/" + kid.slug;

    var img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    // Fall back instead of showing a broken-image icon: thumbnail -> full photo -> name only.
    img.addEventListener("error", function onError() {
      if (img.getAttribute("src") !== kid.img) {
        img.src = kid.img;
      } else {
        img.removeEventListener("error", onError);
        link.classList.add("is-missing");
        img.hidden = true;
      }
    });
    img.src = thumbOf(kid.img);

    var name = document.createElement("span");
    name.textContent = kid.name;

    link.appendChild(img);
    link.appendChild(name);
    frag.appendChild(link);
  });
  grid.appendChild(frag);
})();
