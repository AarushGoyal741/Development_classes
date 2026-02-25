console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").innerHTML)
// try the same in browser console to see the "/n" instead of new line



console.log(typeof document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(typeof document.querySelector(".box").innerHTML)



console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").childNodes[0].nodeName)


console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").textContent)


console.log(document.querySelector(".container").hidden)
// document.querySelector(".container").hidden = true

document.querySelector(".box").innerText = "my name is aarush"

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style","display : inline; border : 2px solid black"))
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").removeAttribute("style"))

console.log(document.querySelector(".box").dataset)