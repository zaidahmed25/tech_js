const div = document.querySelector("div")
const paragraph = document.querySelector("p")
const tech = ["Mouse", "Headphone", "Mic", "Earbuds", "Game Console", "Camera", "Phone", "Laptop", "Memory Card", "Usb",]
for (i=0; i<tech.length; i++){
    div.innerHTML +=`<button onclick="show_item(${i})">${tech[i]}</button>`
}
function show_item (i){
    paragraph.innerHTML += `${tech[i]} <br>`
}