console.log("hello")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"
// document.getElementById("greenbox").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "blue"
// console.log(document.querySelectorAll(".box"))

// // document.querySelectorAll(".box").forEach(e=>{
// //     e.style.backgroundColor = "purple"
// // })

// // document.getElementsByClassName("box").style.backgroundColor = "purple"

// console.log(document.getElementsByTagName("div"))

let elem = document.getElementsByTagName("div")
console.log(elem)
console.log(elem[4].matches("#greenbox"))

console.log(elem[5].closest("html"))
// console.log(elem[4].matches("#greenbox"))
