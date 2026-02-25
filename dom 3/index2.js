/*

console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").innerHTML)
// try the same in browser console to see the "/n" instead of new line

console.log(document.querySelector(".box").innerText)

document.querySelector(".box").innerText = "hello world"

console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").childNodes[1].nodeName)

console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".box").textContent)

console.log(document.querySelector(".box").hidden)

// document.querySelector(".box").hidden = true

// console.log(document.querySelector(".box").hidden)


console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("class"))
document.querySelector(".box").setAttribute("style", "display : inline; border : 2px solid black")
console.log(document.querySelector(".box").attributes)
// document.querySelector(".box2").removeAttribute("style")

console.log(document.querySelector(".box").dataset)
*/

// console.log("hello world")
// let aarush=document.createElement("div")
// aarush.innerHTML="<b>inserted div</b>"
// aarush.setAttribute("class","created")
// // document.querySelector(".container").append(aarush)
// // document.querySelector(".container").prepend(aarush)
// // document.querySelector(".container").before(aarush)
// document.querySelector(".container").after(aarush)


let div2 = document.createElement("div")
div2.innerHTML = "<b>insert via insert method</b>"

let cont = document.querySelector(".container")

cont.insertAdjacentHTML("beforeend","<b>insert via insert method</b>\n")
cont.insertAdjacentText("beforeend","\n<b>insert via insert method</b>")
cont.insertAdjacentElement("beforeend",div2)

// // document.querySelector(".box").remove()

// console.log(document.querySelector(".container").classList.add("blue"))
// // console.log(document.querySelector(".container").classList)
// console.log(document.querySelector(".container").classList.remove("red"))

// console.log(document.querySelector(".container").classList.add("blue"))
// console.log(document.querySelector(".container").classList.add("blue"))
// console.log(document.querySelector(".container").classList.add("blue"))
// console.log(document.querySelector(".container").classList.add("blue"))
// console.log(document.querySelector(".container").classList)

// document.querySelector(".container").classList.toggle("blue")
// document.querySelector(".container").classList.toggle("blue")
