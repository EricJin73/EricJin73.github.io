/* EV share map: one pre-rendered choropleth per year (light + dark variants).
   Images: data/ev_map/<light|dark>_<year>.webp, rendered from the municipality-level dataset. */
(function () {
  const root = document.getElementById("ev-map");
  if (!root) return;

  const BASE = "data/ev_map/";
  const SHARE = { 2011: 0.00023, 2012: 0.00037, 2013: 0.00064, 2014: 0.00105, 2015: 0.00191, 2016: 0.00278, 2017: 0.00391,
    2018: 0.00538, 2019: 0.00748, 2020: 0.01336, 2021: 0.02266, 2022: 0.03206, 2023: 0.0438, 2024: 0.05336 };
  const years = Object.keys(SHARE).map(Number);
  const img = document.getElementById("ev-map-img");
  const slider = document.getElementById("ev-map-slider");
  const elYear = document.getElementById("ev-map-year");
  const elShare = document.getElementById("ev-map-share");
  const play = document.getElementById("ev-map-play");
  const dark = window.matchMedia("(prefers-color-scheme: dark)");

  let year = years[years.length - 1], timer = null, preloaded = "";
  const src = (y) => BASE + (dark.matches ? "dark" : "light") + "_" + y + ".webp";

  function show(y) {
    year = y;
    slider.value = y;
    elYear.textContent = y;
    elShare.textContent = (SHARE[y] * 100).toFixed(SHARE[y] < 0.01 ? 2 : 1) + "%";
    img.src = src(y);
    img.alt = "Map of electric vehicle share by municipality in " + y;
  }

  function preload() {
    const mode = dark.matches ? "dark" : "light";
    if (preloaded === mode) return;
    preloaded = mode;
    years.forEach((y) => { new Image().src = src(y); });
  }

  function stop() {
    clearInterval(timer);
    timer = null;
    play.setAttribute("aria-pressed", "false");
    play.setAttribute("aria-label", "Play");
  }

  function start() {
    preload();
    if (year === years[years.length - 1]) show(years[0]);
    play.setAttribute("aria-pressed", "true");
    play.setAttribute("aria-label", "Pause");
    timer = setInterval(() => {
      if (year >= years[years.length - 1]) return stop();
      show(year + 1);
    }, 700);
  }

  slider.min = years[0];
  slider.max = years[years.length - 1];
  slider.addEventListener("input", () => { stop(); show(+slider.value); });
  play.addEventListener("click", () => (timer ? stop() : start()));
  ["pointerenter", "focusin", "touchstart"].forEach((e) => root.addEventListener(e, preload, { once: true, passive: true }));
  dark.addEventListener("change", () => show(year));
  show(year);
})();

/* Citation panels: toggle, APA/BibTeX switch, copy to clipboard. */
document.querySelectorAll("[data-cite-toggle]").forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  if (!panel) return;
  const tabs = panel.querySelectorAll("[role=tab]"), pres = panel.querySelectorAll("pre[data-fmt]");
  const copy = panel.querySelector("[data-copy]");
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", open);
    panel.hidden = !open;
  });
  tabs.forEach((t) => t.addEventListener("click", () => {
    tabs.forEach((x) => x.setAttribute("aria-selected", x === t));
    pres.forEach((p) => (p.hidden = p.dataset.fmt !== t.dataset.fmt));
  }));
  copy.addEventListener("click", () => {
    const text = [...pres].find((p) => !p.hidden).textContent;
    navigator.clipboard.writeText(text).then(() => {
      copy.textContent = "Copied";
      setTimeout(() => (copy.textContent = "Copy"), 1500);
    });
  });
});
