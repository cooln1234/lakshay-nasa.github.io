const orglink1 = document.createElement("a")
orglink1.href = "https://dok.community/";
orglink1.target = document.createTextNode("_blank")
orglink1.innerHTML = "DoK Community"

const mypara1 = document.createElement("p");
mypara1.innerHTML = "DevRel & CM Intern" + orglink1.outerHTML;


const myexp = document.getElementById("experiences").querySelector('div')

myexp.appendChild(mypara1)