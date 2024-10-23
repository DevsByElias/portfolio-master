document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

const toggleThemeButton = document.getElementById("toggleTheme");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  toggleThemeButton.textContent = "Dark Mode";
}

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleThemeButton.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    toggleThemeButton.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
});
