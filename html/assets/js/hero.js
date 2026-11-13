/**
 * Home hero: the photo leans toward the pointer.
 *
 * Mouse and pen only (touch has nothing to hover with), and not at all for visitors who asked
 * for reduced motion. The whole frame tilts a few degrees in 3D, the glow behind it slides the
 * other way and the photo shifts slightly, so the layers read as depth. The pointer can be
 * anywhere in the hero; the lean is measured from the middle of the photo and capped at the
 * edges. Purely visual: nothing depends on it.
 */
(function () {
  var hero = document.getElementById("hero");
  var frame = hero && hero.querySelector(".hero-visual-frame");
  if (!frame) return;

  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frameId = 0;
  var next = { x: 0, y: 0 };

  function paint() {
    frameId = 0;
    frame.style.setProperty("--px", next.x.toFixed(3));
    frame.style.setProperty("--py", next.y.toFixed(3));
  }

  function aim(x, y) {
    next.x = x;
    next.y = y;
    if (!frameId) frameId = requestAnimationFrame(paint);
  }

  hero.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch" || !fine.matches || reduce.matches) return;
    var r = frame.getBoundingClientRect();
    var clamp = function (v) { return Math.max(-1, Math.min(1, v)); };
    aim(
      clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)),
      clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2))
    );
  });

  // settle back to rest when the pointer leaves
  hero.addEventListener("pointerleave", function () { aim(0, 0); });
})();
