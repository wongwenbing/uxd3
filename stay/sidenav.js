var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "general_images/closemenu.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "general_images/openmenu.png";
    }
}
