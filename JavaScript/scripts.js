//const figures = document.getElementsByName("test");
/*test.onclick = function(mouseEvent) {
    figAnim(test);
}

for (let i=0; i<figures.length; i++) {
    figures[i].onclick = function(mouseEvent) {
        figAnim(figures[i]);
    }
}*/

/*
function figAnim(test) {
    /!*test.onclick = function (e) {
        test.classList.add("clicked");
    };*!/
    test.onclick = function (e) {
        test.style.transform = "scale(0.9)";
    };
}*/

$(document).ready(function () {
    $(".add-class").click(function () {
        $(".border").addClass("add-css");
    });
    $(".remove-class").click(function () {
        $(".border").removeClass("add-css");
    });
});



/*$("figure").hover(function(){
    $(".features").css("background-color", "yellow");
}, function(){
    $(".features").css("background-color", "pink");
});*/

/*$(document).ready(function () {
    $(".border").css("color", "blue");
});*/
