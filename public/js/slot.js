$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var slots = $(".slots .item");
    var salute = $(".salute");
    $("#btn-spin").on("click", function () {
        if (!isAnimate) {
            isAnimate = true;
            salute.removeClass("active");
            $(this).addClass("active");
            for (var i = 0; i < 3; i++) {
                randomNum = Math.floor(Math.random() * 8) + 1;
                winNums[i] = randomNum;
                for (var j = 0; j < 9; j++) {
                    slots.eq(i).removeClass('state' + j);
                }
                slots.eq(i).addClass("animate").addClass('state' + randomNum);
            }
            setTimeout(function () {
                slots.removeClass("animate");
                isAnimate = false;
                $("#btn-spin").removeClass("active");
                if (winNums[0] == winNums[1] && winNums[0] == winNums[2]) {
                    salute.addClass("active");
                }
            }, 8000);
        }
    });
});