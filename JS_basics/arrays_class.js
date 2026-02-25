const fruits = ["banana", "apple", "orange"]


let places = ["delhi","faridabad","gurugram"]
let student = ["Aarush", 19, true]

let arr = [1,2,9,34,8,6,7]//   "34"   "5" a b c d

// console.log(fruits)
// console.log(places)

// let name = "Aarush"
// name[0] = "B"
// console.log(name)

// fruits[0] = "grapes"
// console.log(fruits)


// console.log(typeof fruits)

console.log(arr.toString())

console.log(arr.join(" - "))

console.log(arr.pop())
console.log(arr)

// arr.push([1,2,3])
// console.log(arr)

// arr.push([1,2,3])
// console.log(arr)

// arr.push([1,2,3])
// console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift(4))
console.log(arr)

console.log(arr.length)
console.log(arr[3])

let a1 = [1,2,3]    //1,2,3,4,5,6,7,8,9
let a2 = [4,5,6]
let a3 = [7,8,9]

a1.concat(a2,a3)
console.log(a1)
console.log(a1.concat(a2,a3))

array = [] + a1 +a2 +a3

arr.sort()
console.log(arr)

arr.sort((a,b) => a-b)   //asscending
console.log(arr)

arr.sort((a,b) => b-a)   //descending
console.log(arr)

// console.log(arr.splice(1,2))
// console.log(arr)

console.log(arr.splice(1,2, 3,4,5,6))
console.log(arr)

// console.log(arr.slice(2))
// console.log(arr)

// console.log(arr.slice(2,5))
// console.log(arr)


arr.reverse()
console.log(arr)


delete arr[5]
console.log(arr)
console.log(typeof arr[5])
console.log(arr[5])
console.log(arr.length)