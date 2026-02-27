let button = document.getElementById("btn")

// button.addEventListener("click",(e)=>{
//     alert("button was pressed")
//     document.querySelector(".box").innerHTML = "<b>hi there</b>"
// })


button.addEventListener("contextmenu",(e)=>{
    // alert("button was pressed")
    document.querySelector(".box").innerHTML = "<b>hi there</b>"
})

document.addEventListener("keydown",(e)=>{
    console.log(e, e.altKey)
})
