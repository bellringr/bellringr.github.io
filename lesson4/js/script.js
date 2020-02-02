function entrance() {
    var currentYear = new Date();
    lastmod.innerHTML = document.lastModified;
    thisyear.innerHTML = currentYear.getFullYear();
}

//const hambutton = document.querySelector(".ham");
//hambutton.addEventListener("click", toggleMenu, false);

//function toggleMenu() {
//document.querySelector(".navigation").classList.toggle("responsive");
//}

window.onload = entrance;