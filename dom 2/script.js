console.log("hello world")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"
document.getElementById("greenbox").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "blue"

// //console.log(document.querySelectorAll(".box")).style.backgroundColor = "blue"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "purple"
})

// console.log(document.getElementsByTagName("div"))

elem = document.getElementsByTagName("div")
// console.log(elem)
console.log(elem[5].matches("#greenbox"))
console.log(elem[4].matches("#greenbox"))

console.log(elem[5].closest("#greenbox"))
console.log(elem[4].closest("#greenbox"))
console.log(elem[4].closest(".container"))
console.log(elem[4].closest("html"))


console.log(document.querySelector(".container").contains(elem[4]))
console.log(document.querySelector(".container").contains(elem[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))

