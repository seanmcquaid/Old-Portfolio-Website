// create slow drag to each different section of the page
// mouseover for each skill icon

const navToggleButton = document.querySelector(".nav-toggle-icon")

const mobileNavLinks = document.querySelector(".mobile-nav")

navToggleButton.addEventListener("click", ()=>{
    mobileNavLinks.style.display = "block";
})