var menuBtn = document.getElementById("menuBtnId");
var menu = document.getElementById("menuId");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("navbar_right-menuActive");
});

// Fermer le menu si on clique en dehors
window.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && event.target !== menuBtn) {
    menu.classList.remove("navbar_right-menuActive");
  }
});
