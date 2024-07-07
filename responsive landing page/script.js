var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
pagination: {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: "true"
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

var icon = document.getElementById("theme-icon");
icon.onclick = function (){
  document.body.classList.toggle("dark-theme");
}


function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex"; 
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}