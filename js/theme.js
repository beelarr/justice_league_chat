var boxElementArray = [];

let element = document.getElementById("theme");
let random = document.querySelector("body");
let tEnlarge = document.getElementById("enlargeText");

boxElementArray = Array.from(document.querySelector(".message-container").children);

document.querySelector(".my-2").addEventListener("click", function(){
    let boxElement = document.querySelector(".message-container").children;
    console.log("box", boxElement);
    console.log("message", document.querySelector(".message-container").children)
    boxElementArray.push(document.querySelector(".message-container").children);
    if (element.value === "1"){
        boxElementArray.forEach(function(e, index){
        console.log("e", e[index]);
        e[index].classList.add("clearBox");
    })
    }
});

// document.querySelector(".my-2").addEventListener("onKeyUp", function(e){
//     if (e.which === 13){
//     let boxElement = document.querySelector(".message-container").children;
//     boxElementArray.push(document.querySelector(".message-container").children);
//     if (element.value === "1"){
//         boxElementArray.forEach(function(e, index){
//         console.log("e", e[index]);
//         e[index].classList.add("clearBox");
//     })
// }
//     }
// });

console.log(boxElementArray);
element.addEventListener("change", function(event){

if (element.value === "1"){
    random.classList.add("darkTheme");
    boxElementArray.forEach(function(e, index){
        console.log("e", e[index]);
        e[index].classList.add("clearBox");
    })

} else {
    random.classList.remove("darkTheme");
     boxElementArray.forEach(function(e, index){
        console.log("e", e[index]);
    e[index].classList.remove("clearBox"); 
    })
}

});
tEnlarge.addEventListener("click", function(){
    random.classList.add("biggerText");
})