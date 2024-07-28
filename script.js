document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".auto-type", {
    strings: ["IT-Specialist", "Student", "Coding Enthusiast"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  });
});

document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.querySelector("i.demo-arrow").style.color = "#1b2970";
  });

  item.addEventListener("mouseout", function () {
    this.querySelector("i.demo-arrow").style.color = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
