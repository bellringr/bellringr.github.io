function entrance() {
    var currentYear = new Date();
    lastmod.innerHTML = document.lastModified;
    thisyear.innerHTML = currentYear.getFullYear();
}

window.onload = entrance;