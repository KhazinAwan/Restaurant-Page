import "./style.css"

import home from "./components/home/home.js"
import menu from "./components/menu/menu.js"
import contact from "./components/contact/contact.js"

home();

const content = document.getElementById("content");

function clearContent() {

    content.replaceChildren();

}

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click" , ()=> {

    clearContent();
    home();
})

menuBtn.addEventListener("click" , ()=> {

    clearContent();
    menu();
})

contactBtn.addEventListener("click" , ()=> {

    clearContent();
    contact();
})


