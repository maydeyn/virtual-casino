$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var sounds = $("#sound");
    var slots = $(".slots .item");
    var salute = $(".salute");
    $("#btn-spin").on("click", function () {
        if (!isAnimate) {
            isAnimate = true;
            sounds.play();
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
                sounds.stop();
                $("#btn-spin").removeClass("active");
                if (winNums[0] == winNums[1] && winNums[0] == winNums[2]) {
                    salute.addClass("active");
                }
            }, 8000);
        }
    });
});
//when a user clicks btn-spin start play the music
// if is animate true get the id 