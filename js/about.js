const unvlink = document.createElement("a")
unvlink.href = "https://www.dcrustm.ac.in/";
unvlink.target = document.createTextNode("_blank")
unvlink.innerHTML = "Deenbandhu Chhotu Ram University of Science and Technology, Murthal"

const mypara = document.createElement("p");
mypara.innerHTML = "My name is Lakshay and I am a junior pursuing my Bachelor's of Technology from India. I'm a Full Stack Web Developer and a DevOps Enthusiast. ";
// mypara.innerHTML = "Hi! I am Lakshay, a 3rd Year Electronics and Communication student at " + unvlink.outerHTML + ". I am a Full Stack Developer and an Open Source Enthusiast. Presently, I’m working with Rennovation Software as a Software Engineer Intern. Besides this, I am also a Contributor at Data On Kubernetes Community to inspire folks to follow best practices over running data on Kubernetes.";


const aboutMe = document.getElementById("about").querySelector('div')

aboutMe.appendChild(mypara)