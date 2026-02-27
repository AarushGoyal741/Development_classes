/*

document.querySelector(".child").addEventListener("click",(ehvmg)=>{
    ehvmg.stopPropagation()
    alert("child was pressed")
})

document.querySelector(".childContainer").addEventListener("click",()=>{
    alert("childContainer was pressed")
})

document.querySelector(".container").addEventListener("click",()=>{
    alert("container was pressed")
})
*/
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// console.log(setInterval(()=>{
//     document.querySelector(".childContainer").style.background = getRandomColor();
// },500))


//clearInterval
console.log(setTimeout(()=>{
    document.querySelector(".childContainer").style.background = getRandomColor();
},3000))

console.log(setTimeout(()=>{
    document.querySelector(".childContainer").style.background = getRandomColor();
},4000))

console.log(setTimeout(()=>{
    document.querySelector(".childContainer").style.background = getRandomColor();
},5000))


//clearTimeout

