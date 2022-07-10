let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let conatiner = document.querySelector(".container");


menuIcon.addEventListener("click",hamburger);

function hamburger(){
    sidebar.classList.toggle("small-sidebar");
    conatiner.classList.toggle("large-container");
}