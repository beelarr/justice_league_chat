$(function () {
let random = $('body');
let tEnlarge = $("#enlargeText")


tEnlarge.click(function(){
    random.toggleClass("biggerText");
});


//this function gives users the option to select themes
function changeStyleSheet(theme) {
    $("#pagetheme").attr("href", theme);
}

function start() {
    let DefaultTheme = $("#DefaultTheme");
    let DarkKnight = $("#DarkKnight");
    let WonderWoman = $("#WonderWoman");
    let Aquaman = $("#Aquaman");
    let Flash = $("#Flash");
    let Cyborg = $("#Cyborg");
    let Superman = $("#Superman");

    DefaultTheme.click(function () {
        changeStyleSheet("./css/main.css")
    });

    DarkKnight.click(function () {
        changeStyleSheet("./css/batman.css");
    });

    WonderWoman.click(function () {
        changeStyleSheet("./css/wonderwoman.css");
    });

    Aquaman.click(function () {
        changeStyleSheet("./css/aquaman.css");
    });

    Flash.click(function () {
        changeStyleSheet("./css/flash.css");
    });

    Cyborg.click(function () {
        changeStyleSheet("./css/cyborg.css");
    });

    Superman.click(function () {
        changeStyleSheet("./css/superman.css");
    });
}

window.onload = start;



    $('#register').modal('show');


$("#modalButton").click(function () {
    $("#register").modal('show');

});

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










