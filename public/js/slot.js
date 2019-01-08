$(document).ready(function () {
    var isAnimate = false;
    var randomNum;
    var winNums = [];
    var money = $("#money-holder1");
    // var counter = $("#counter").text(money);
    var counter;
    var slots = $(".slots .item");
    var salute = $(".salute");
    var sound = $("#sound");
    var reelsound = $("reelsound");
    $.get("/api/user_data").then(function (data) {
        // res.json(db.User.bank);
        console.log(data);
        $("#counter1").text(parseInt(data.bank));

    })
    // jQuery.ajaxSetup({ async: false });
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
                    counter = $("#counter1");
                    console.log(counter);

                    // counter += 10;
                    // counter = $("#counter").text(money);
                } else {
                    // counter -= 10;
                    counter = $("#counter1").text();
                    console.log(counter);
                    counter -= 10;
                    $("#counter1").text(counter);
                    // var sendData = $("#counter1").text(counter);
                    // console.log(sendData);


                }
                // $.put("/api/user_data").then(function (data) {
                //     // res.json(db.User.bank);
                //     console.log(data);
                //     $("#counter1").text(parseInt(data.bank));

                // })

                $.ajax({
                    url: '/api/user_bank',    //Your api url
                    type: 'PUT',   //type is any HTTP method
                    data: {
                        data: counter
                    },      //Data as js object
                    success: function () {
                    }
                })

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