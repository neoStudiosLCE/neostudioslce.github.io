// scroll cue
const onScroll = () => {
  if (window.scrollY > 5) navbar.classList.remove("expanded");
  else navbar.classList.add("expanded");

  if (window.scrollY > 40) scrollCue.classList.add("hidden");
  else scrollCue.classList.remove("hidden");
};

window.addEventListener("scroll", onScroll, { passive: true });
setTimeout(() => onScroll(), 1000);

// nav scrolling
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetID = link.getAttribute("href");
    if (!targetID.startsWith("#")) return;

    e.preventDefault();

    const targetElement = document.querySelector(targetID);
    if (!targetElement) return;

    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  });
});

// features
const features = document.querySelectorAll(".feature");
const featureObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.3,
  },
);

features.forEach((feature) => featureObserver.observe(feature));

// launchers
const launchersList = document.querySelector(".launchers-list");
const launcherObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const items = entry.target.querySelectorAll(".launcher-item");
      items.forEach((item, i) => {
        item.style.transitionDelay = `${i * 150}ms`;
        item.classList.add("visible");
      });

      observer.unobserve(entry.target);
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.3,
  },
);

launcherObserver.observe(launchersList);
