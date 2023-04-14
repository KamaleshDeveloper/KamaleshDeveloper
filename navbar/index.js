const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementById("nav-list");
toggleButton.addEventListener("click",function(){
    navList.classList.toggle("active"); 
});