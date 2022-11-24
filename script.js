function menu() {
    let closeIcon = document.getElementById("closeMenu");
    closeIcon.classList.toggle("hidden");
    let openIcon = document.getElementById("openMenu");
    openIcon.classList.toggle("hidden");
    let menuList = document.getElementById("navList");
    menuList.classList.toggle("hidden");

    let hdr = document.getElementById("hdr");
    hdr.classList.toggle("bg-[url('./images/desktop/image-hero.jpg')]");
    hdr.classList.toggle("bg-gray-900");

}