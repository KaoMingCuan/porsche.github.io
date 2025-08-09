let currentIndex = 0;
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const totalSlides = slideImages.length;

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides; // quay lại 0 sau ảnh cuối
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // quay lại ảnh cuối nếu đang ở đầu
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const resultList = document.getElementById("resultList");

  const cars = [
    { name: "Porsche 911", link: "911.html" },
    { name: "Porsche Macan", link: "macan.html" },
    { name: "Porsche Taycan", link: "taycan.html" },
    { name: "Porsche Panamera", link: "panamera.html" },
    { name: "Porsche Cayenne", link: "cayenne.html" },
    { name: "Porsche 718", link: "718.html" },
     { name: "Xe mới", link: "xemoi.html"},
  ];

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    resultList.innerHTML = "";

    if (query === "") {
      resultList.style.display = "none";
      return;
    }

    const matches = cars.filter(car =>
      car.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultList.style.display = "none";
      return;
    }

    matches.forEach(car => {
      const li = document.createElement("li");
      li.textContent = car.name;
      li.addEventListener("click", () => {
        window.location.href = car.link;
      });
      resultList.appendChild(li);
    });

    resultList.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      resultList.style.display = "none";
    }
  });
});
