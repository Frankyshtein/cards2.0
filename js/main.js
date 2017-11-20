var answer;
console.log(deck)
if(deck == false){
    var deck = $(".wrapper img");
    console.log(deck)
}

function large() {
    $(".module img").remove();
    $(".module").on('click', small);
    answer = $(this).index() + 2;
    $(this).clone().appendTo($(".module"));
    $(".module").fadeIn(400, function () {
        $(".module img").on('click', flip);
    });
}

function small(e) {
    var target = $(e.target);
    if (!target.parents().hasClass('module') || target.hasClass("close") || target.parents().hasClass("close")) {
        $(".module").fadeOut(400);
    }
}

function flip() {
    $(this).addClass("flip");
    setTimeout(function () {
        $(".module img").remove();
        console.log(1)
        $(".wrapper img:nth-child(" + answer + ")").clone().appendTo($(".module"));
        $(".module img").removeClass("hide");
    }, 1000);
}
$("body img").on('click', large);
