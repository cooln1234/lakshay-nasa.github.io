// Work Status Animation
var typed = new Typed(".work-status-anim", {
    strings: ["Full Stack Developer", "Open Source Advocate", "UI/UX", "Designer"],
    typespeed: 10,
    backspeed: 10,
    loop: true,
});


// function openAbout()
// {   
//     console.log("About Triggered")
// }


function openAbout() {
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'block';
}

function openProjects() {
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'block';
}

function exit(){
    var displayCheck = document.getElementById("overlay-about");
    displayCheck.style.display = 'none';
}
