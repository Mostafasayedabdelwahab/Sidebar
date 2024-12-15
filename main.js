let sidebar = document.getElementById("aa");
let icon = document.getElementById("click");
let menu = document.getElementById("menu");
var x = window.matchMedia("(max-width: 761px)");

menu.addEventListener("click", function () {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }
  if (x.matches) {
    menu.style.display = "none";
  }
});

icon.onclick = function () {
  sidebar.classList.remove("show");
    if (x.matches) {
      menu.style.display = "block";
    }
};
