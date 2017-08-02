let random = document.querySelector("body");
let tEnlarge = document.getElementById("enlargeText");

tEnlarge.addEventListener("click", function(){
    random.classList.toggle("biggerText");
});

function changeStyleSheet(theme) {
    document.getElementById("pagetheme").setAttribute("href", theme);  
}

function start() {
    let DefaultTheme = document.getElementById("DefaultTheme");
    let DarkKnight = document.getElementById("DarkKnight");

    DefaultTheme.onclick = function () { 
        changeStyleSheet("./css/main.css") 
    };

    DarkKnight.onclick = function () { 
        changeStyleSheet("./css/test-css.css"); 
    };
}

window.onload = start;





$(function () {
    $('#register').modal('show');

});

// $(BUTTON SOME NAME).click(function () {
//     $("#register").modal('show');
//
// });


function changeStyleSheet(theme) {
    document.getElementById("pagetheme").setAttribute("href", theme);
}

function start() {
    let DefaultTheme = document.getElementById("DefaultThemeModal");
    let DarkKnight = document.getElementById("DarkKnightModal");

    DefaultTheme.onclick = function () {
        changeStyleSheet("./css/main.css")
    };

    DarkKnight.onclick = function () {
        changeStyleSheet("./css/test-css.css");
    };
}

window.onload = start;







