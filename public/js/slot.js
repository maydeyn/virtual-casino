$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var money = $("#money-holder");
    var counter = $("#counter").text(money);
    var slots = $(".slots .item");
    var salute = $(".salute");
    var sound = $("#sound");
    var reelsound = $("reelsound");
    jQuery.ajaxSetup({ async: false });
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

        // playAudio();
        // pauseAudio();
    });
    $("#play").on("click", function () {
        soundOn();
    });
    $("#pause").on("click", function () {
        soundOff();
    });

    // function playAudio() {
    //     isAnimate = true;
    //     document.getElementById("reelsound").play(reelsound);

    //     // playsound.src = "../audio/04515.mp3";
    //     // playsound.play();
    //     setInterval(playAudio, 1000);   // alert("the song is playing");
    // }


    // function pauseAudio() {
    //     isAnimate = false;
    //     document.getElementById("reelsound").pause(reelsound);
    //     // sound.pause();
    // }
});
function soundOn() {
    document.getElementById("sound").play();
};
function soundOff() {
    document.getElementById("sound").pause();
};