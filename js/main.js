document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const lists = document.querySelectorAll(".nav-links");
  if (toggle && lists.length) {
    toggle.addEventListener("click", () => lists.forEach((l) => l.classList.toggle("open")));
    lists.forEach((l) =>
      l.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => lists.forEach((x) => x.classList.remove("open")))
      )
    );
  }

  // Language switch: carry the current section (hash) over to the other language.
  document.querySelectorAll(".nav-lang a").forEach((a) =>
    a.addEventListener("click", () => {
      if (location.hash) a.href = a.href.split("#")[0] + location.hash;
    })
  );

  // Top-level views (Personal / Datasets) living on the same page.
  // The hash decides the view: the view that contains the targeted id is shown.
  const views = document.querySelectorAll(".view");
  if (!views.length) return;

  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    const view = (target && target.closest(".view")) || views[0];
    views.forEach((v) => (v.hidden = v !== view));
    document.querySelectorAll("[data-nav]").forEach((n) => (n.hidden = n.dataset.nav !== view.dataset.view));
    document.querySelectorAll(".nav-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === view.dataset.view));
    requestAnimationFrame(() => {
      if (target && target.closest(".view") && id !== "datasets") target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
  }

  window.addEventListener("hashchange", route);
  route();
});
