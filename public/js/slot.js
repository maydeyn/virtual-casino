$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var money = 30;
    var counter = $("#counter").text(money);
    var slots = $(".slots .item");
    var salute = $(".salute");
    var sound = $("#sound");
    var playsound = $("sound");
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
                    money += 10;
                    counter = $("#counter").text(money);
                } else {
                    money -= 10;
                    counter = $("#counter").text(money);

                }

            }, 8000);

        }
        if (money === 10) {
            isAnimate = false;
            $(".extramoney").show();
            $("#100").on("click", function () {
                money += 100;
                money.empty();
            });
            $("#50").on("click", function () {
                money += 50;
                counter = $("#counter").text(money);
                money.empty();
            });
            $("#150").on("click", function () {
                money += 150;
                money.empty();
            });
        } else {
            $(".extramoney").hide();
        };
        playAudio();
        pauseAudio();
    });
    function playAudio() {
        isAnimate = true;
        playsound.src = "../audio/04515.mp3";
        playsound.play();
        // alert("the song is playing");
    }
    function pauseAudio() {
        isAnimate = false;
        // sound.pause();
    }
});