const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


menuOpen.addEventListener("click",()=>{
    mobileMenu.classList.add("active");
    menuOpen.classList.add("deactive");
    menuClose.classList.add("active");
});
menuClose.addEventListener("click",()=>{
    mobileMenu.classList.remove("active");
});