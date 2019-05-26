$("ul").on("click", "li", function () {
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "grey",
            textDecoration: "line-through"
        });

    }


});
// ili sa class u css pa sa toggle

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $("this").remove();
    });
    event.stopPropagation();
});


$("input").keypress(function (e) {
    if (e.which === 13) {
        //grabbing text from input
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function () {
    $("input").fadeToggle();
});