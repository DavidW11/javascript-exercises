// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


const body = document.querySelector("body");

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "Hey I'm red!";
firstParagraph.style.color = "red";
body.appendChild(firstParagraph);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
body.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; background-color: pink; border-color: black");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
div.appendChild(p);

body.appendChild(div);