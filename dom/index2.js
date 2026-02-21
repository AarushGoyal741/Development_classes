console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[0])
console.log(document.body.childNodes[1].childNodes[1])

let cont =document.body.childNodes[1]

console.log(cont.firstChild)
console.log(cont.lastElementChild)
console.log(cont.firstElementChild)
cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor = "green"
console.log(cont.childNodes[3].nextElementSibling)
// console.log(cont.childNodes[3].previousElementSibling)
// console.log(cont.childNodes[3].parentElement)