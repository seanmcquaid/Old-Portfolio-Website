const backDrop = document.querySelector("#backdrop");
const navToggleButton = document.querySelector(".nav-toggle-icon")
const mobileNavMenu = document.querySelector(".mobile-nav")
const mobileNavOptionsArray = document.querySelectorAll(".mobile-nav-option");
// console.log(anchorArray);


navToggleButton.addEventListener("click", ()=>{
    mobileNavMenu.style.display = "block";
    backdrop.style.display = 'block';
});

backDrop.addEventListener("click", ()=>{
    mobileNavMenu.style.display = "none";
    backdrop.style.display = 'none';
});

mobileNavOptionsArray.forEach((option)=>{
    option.addEventListener("click", ()=>{
        mobileNavMenu.style.display = "none";
        backdrop.style.display = 'none';
    });
});