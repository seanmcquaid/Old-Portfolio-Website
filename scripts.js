const backDrop = document.querySelector("#backdrop");
const navToggleButton = document.querySelector(".nav-toggle-icon")
const mobileNavMenu = document.querySelector(".mobile-nav")
const mobileNavOption = document.querySelector(".mobile-nav-option");


navToggleButton.addEventListener("click", ()=>{
    mobileNavLinks.style.display = "block";
    backdrop.style.display = 'block';
});

backDrop.addEventListener("click", ()=>{
    mobileNavMenu.style.display = "none";
    backdrop.style.display = 'none';
});

mobileNavOption.addEventListener("click", ()=>{
    mobileNavMenu.style.display = "none";
    backdrop.style.display = 'none';
});