(()=>{"use strict";const e=()=>{const e=document.createElement("h1");e.innerHTML="Starbeans Café";const n=document.createElement("img");n.src="https://www.spriters-resource.com/resources/sheets/1/901.png?updated=1460953132",n.alt="Chili's logo";const t=document.createElement("p");t.innerHTML="Your beans. Our blends.";const c=document.createElement("div");c.id="container",c.appendChild(e),c.appendChild(n),c.appendChild(t),document.getElementById("content").appendChild(c),console.log("home Function")},n=()=>{document.getElementById("container").remove()};(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.id="navBar",n.class="tabs";const t=document.createElement("div");t.id="homeTab",t.classList="tab",t.innerHTML="Home";const c=document.createElement("div");c.id="menuTab",c.classList="tab",c.innerHTML="Menu";const o=document.createElement("div");o.id="contactTab",o.classList="tab",o.innerHTML="Contact",n.appendChild(t),n.appendChild(c),n.appendChild(o),e.prepend(n),console.log("navBar Function")})(),e(),document.getElementById("homeTab").addEventListener("click",(function(){n(),e()})),document.getElementById("menuTab").addEventListener("click",(function(){n(),(()=>{const e=document.createElement("h1");e.innerHTML="Blends";const n=document.createElement("p");n.innerHTML="At Starbeans we brew only the finest of beans our guests provide. \n Select from our blends below.";const t=document.createElement("div");t.id="container",t.appendChild(e),t.appendChild(n),document.getElementById("content").appendChild(t),console.log("menu Function")})()})),document.getElementById("contactTab").addEventListener("click",(function(){n(),(()=>{const e=document.createElement("div");e.id="container";const n=document.createElement("div");n.innerHTML="Conact goes here",e.appendChild(n),document.getElementById("content").appendChild(e),console.log("contact Function")})()}))})();