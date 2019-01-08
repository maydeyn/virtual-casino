

$(document).ready(function () {

  $.get("/api/user_data").then(function (data) {
    console.log(data);

    $(".member-name").text(data.email);
    //  async: false;
    // jQuery.ajaxSetup({ async: false });
    $("#money-holder").text("Your bank: $" + data.bank);
  });
  const money = $("#money-holder");

  const counter = $("#counter");
  if (money === 0) {
    // isAnimate = false;
    $(".extramoney").show();
    $("#100").on("click", function () {
      counter += 100;
      counter.empty();
    });
    $("#50").on("click", function () {
      counter += 50;
      // counter = $("#counter").text(money);
      money.empty();
    });
    $("#150").on("click", function () {
      counter += 150;
      money.empty();
    });
  } else {
    $(".extramoney").hide();
  };
  // $.ajax({
  //   url: "/api/user_bank",
  //   data: {
  //     bank: total
  //   },
  //   success: function (result) {
  //     $("money-holder").html("<strong>" + result + "</strong> degrees");
  //   }
  // });
  // updateBank();

});
