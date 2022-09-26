// Work Status Animation
var typed = new Typed(".work-status-anim", {
    strings: ["Full Stack Developer", "Open Source Advocate", "UI/UX", "Designer", "DevOps", "DevRel"],
    typespeed: 10,
    backspeed: 10,
    loop: true,
});


function overlayBox() {
    var openBox = document.getElementById("overlay-about");
    openBox.setAttribute("style", "display: block;position: absolute;z-index: 1;background-color: #c7c7c7;width: 80%;height: 80%;border: solid rgb(77, 77, 139) 2px;border-radius: 4em;left: 10%;top: 10%;")

}

function openAbout() {
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'block';
}

function openProjects() {
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'block';
}

function exit() {
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'none';
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
// var navItems = document.getElementById("nav-items")
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
