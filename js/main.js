function large() {
    $(this).animate({
        width: "25%"
    }, 400);
    $(this).on('click', function () {
        $(this).addClass("flip");
        $(this).fadeOut(500,function(){
        });
    })
}
$("img").on('click', large);
