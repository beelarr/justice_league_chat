let random = document.querySelector("body");
let tEnlarge = document.getElementById("enlargeText");

tEnlarge.addEventListener("click", function(){
    random.classList.toggle("biggerText");
});


//this function gives users the option to select themes
function changeStyleSheet(theme) {
    document.getElementById("pagetheme").setAttribute("href", theme);  
}

function start() {
    let DefaultTheme = document.getElementById("DefaultTheme");
    let DarkKnight = document.getElementById("DarkKnight");
    let WonderWoman = document.getElementById("WonderWoman");
    let Aquaman = document.getElementById("Aquaman");
    let Flash = document.getElementById("Flash");
    let Cyborg = document.getElementById("Cyborg");
    let Superman = document.getElementById("Superman");

    DefaultTheme.onclick = function () {
        changeStyleSheet("./css/main.css")
    };

    DarkKnight.onclick = function () { 
        changeStyleSheet("./css/batman.css"); 
    };

    WonderWoman.onclick = function () { 
        changeStyleSheet("./css/wonderwoman.css"); 
    };

    Aquaman.onclick = function () { 
        changeStyleSheet("./css/aquaman.css"); 
    };

    Flash.onclick = function () { 
        changeStyleSheet("./css/flash.css"); 
    };

    Cyborg.onclick = function () { 
        changeStyleSheet("./css/cyborg.css"); 
    };

    Superman.onclick = function () {
        changeStyleSheet("./css/superman.css");
    };
}

window.onload = start;



$(function () {
    $('#register').modal('show');

});

$("#modalButton").click(function () {
    $("#register").modal('show');

});


// function changeStyleSheet(theme) {
//     document.getElementById("pagetheme").setAttribute("href", theme);
// }
//
// function start() {
//     let DefaultTheme = document.getElementById("DefaultThemeModal");
//     let DarkKnight = document.getElementById("DarkKnightModal");
//
//     DefaultTheme.onclick = function () {
//         changeStyleSheet("./css/main.css")
//     };
//
//     DarkKnight.onclick = function () {
//         changeStyleSheet("./css/test-css.css");
//     };
// }
//
// window.onload = start;










