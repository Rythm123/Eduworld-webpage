navbar=document.querySelector(".navbar");
rightNav=document.querySelector(".rightNav");
burger=document.querySelector(".burger");
navList=document.querySelector(".nav-list");

burger.addEventListener("click",()=>{
    navList.classList.toggle("visi-resp");
    rightNav.classList.toggle("visi-resp");
    navbar.classList.toggle("h-nav-resp");
})