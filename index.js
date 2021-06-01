"use strict"
function templ(color){
    const template = document.createElement("template");
    const box = document.createElement("div");
    box.style.backgroundColor='color';
    document.getElementById('game').appendChild(template);
    template.appendChild(box);
    
} 
templ(red)