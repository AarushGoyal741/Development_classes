console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])

let cont = document.body.childNodes[1]

// console.log(cont.firstChild)
// console.log(cont.lastChild)

// console.log(cont.firstElementChild)
// console.log(cont.lastElementChild)
// cont.firstElementChild.style.color = "red"
// cont.firstElementChild.style.backgroundColor = "green"


console.log(cont.childNodes[3].nextSibling)
console.log(cont.childNodes[2].parentElement)

// array = [[1,2,3]] //array[0]  array[0][0]