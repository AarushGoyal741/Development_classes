
// console.log("hello world1")
// console.log("hello world2")
// console.log("hello world3")
// console.log("hello world4")

// setTimeout(()=>{
//     console.log("inside timeout hello")
// },0)
// setTimeout(()=>{
//     console.log("inside timeout hello2")
// },0)

// console.log("hello world5")
// console.log("hello world6")


// console.log("hello world7")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                      vip topic                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

function loadscript(src , callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC : "+src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("error in loading script with SRC : "+src)
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);;
}

function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("hello "+src);

}

function goodmorning(src){
    alert("goodmorning "+src);
}
function goodevening(src){
    alert("goodevening "+src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello)*/

function loadscript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with src : "+src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("error in loading script src : "+src)
        callback(new Error("src got some error"),null)
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if (error){
        console.log(error)
        return
    }
    alert("hello "+src)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello)


