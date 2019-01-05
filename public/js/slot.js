$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var slots = $(".slots .item");
    var salute = $(".salute");
    // var money = 100;
    // $("#point-icon").text("Your money:  $");
    $("#btn-spin").on("click", function () {
        if (!isAnimate) {
            isAnimate = true;
            salute.removeClass("active");
            $(this).addClass("active");
            for (var i = 0; i < 3; i++) {
                randomNum = Math.floor(Math.random() * 9) + 1;
                winNums[i] = randomNum;
                for (var j = 0; j < 10; j++) {
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
    // var myWindow = window.open("", "MsgWindow", "width=200, height=100");
    // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
});