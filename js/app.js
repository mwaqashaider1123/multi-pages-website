let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};
 


// hide navbar
let navBar = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navbarCollapse.classList.remove("show");
    })
})