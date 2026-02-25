const fruits = ["banana", "apple", "orange"]
let places = ["delhi","faridabad","gurugram"]
let student = ["Aarush", 19, true]

console.log(fruits)
console.log(places)
console.log(student, student.length)

console.log(typeof fruits)

let arr = [1,2,34,5,6,7]

//arrays are mutable strings are immutable
// what does this mean ???

let name= "Aarush"
console.log(name[0])

name[0]="G"

console.log(name)
fruits[0]="mango"
places[0]="noida"

console.log(fruits)
console.log(places)

let x=23
let y=12
console.log(x)
console.log(y)

x=98
y=54
console.log(x)
console.log(y)





console.log(arr.toString())

console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr)

arr.push(100)
console.log(arr)
arr.push("nums")
console.log(arr)

console.log(arr.shift())

console.log(arr)

arr.unshift(1)
console.log(arr)


console.log(arr.length)
delete arr[6]
console.log(arr)

console.log(arr.length)
console.log(arr[6])
console.log(typeof arr[6])


let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

a1.concat(a2,a3)
console.log(a1)
console.log(a1.concat(a2,a3))



arr[6]=7
console.log(arr)

arr.sort()
console.log(arr)

arr.sort((a, b) => a - b)
console.log(arr)

console.log(arr.splice(1,2))
console.log(arr)

console.log(arr.splice(1,2, 3,4,5,6))
console.log(arr)


console.log(arr.slice(2))
console.log(arr.slice(1,3))

arr.reverse()
console.log(arr)