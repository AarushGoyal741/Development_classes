let age = 13

if (age > 18) {
    console.log("you can drive")
}

else {
    console.log("you can't drive")
}


let marks = 67
if (marks > 90) {
    console.log("Grade A")
}

else if (marks > 80) {
    console.log("Grade B")
}
else if (marks > 60) {
    console.log("Grade c")
}
else if (marks > 40) {
    console.log("Grade D")
}
else if (marks > 20) {
    console.log("Grade E")
}
else {
    console.log("you fail")
}


let a = 12
let b = 15
let c = 0

// if (a>b){
//     c=a-b
// }
// else{
//     c=b-a
// }

c = a > b ? a - b : b - a
console.log(c)


//five types of loops in JS
// for loop
// for in loop
// for of loop
// while loop
// do while loop

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

// console.log(i)


obj ={
    name:"aarush",
    age:19,
    branch:"iiot"
}

for (let key in obj){
    console.log(key)
    console.log(obj[key])
}

for (let c of "Aarush"){
    console.log(c)
}

let i =1
while (i<7){
    console.log(i)
    i++
}

i=20
do{
    console.log(i)
    i++
}while(i<15)