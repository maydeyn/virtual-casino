

$(document).ready(function () {

  $.get("/api/user_data").then(function (data) {

    $(".member-name").text(data.email);
    //  async: false;
    // jQuery.ajaxSetup({ async: false });
    $("#money-holder").text("Your bank: $" + data.bank);
  });
  const money = $("#money-holder");

  console.log(money);

  // $.ajax({
  //   method: "PUT",
  //   url: "/api/user_bank",
  //   data: {
  //     "newTotal": "1000"
  //   },
  //   dataType: "text"
  // }).then(function (data) {
  //   // window.location.replace(data);
  //   // $("#money-holder").text(data);
  //   console.log(data);

  //   // If there's an error, log the error
  // }).catch(function (err) {
  //   console.log(err);
  // });
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.ajax({
  //   url: "/api/user_data", method: "GET", success: function (result) {
  //     $("#money-holder").text(JSON.result.stringify(bank));
  //   }
  // });

  // $.get("/api/user_bank").then(function (data) {
  //   $("#money-holder").text(data.newTotal);
  // });
  // function updateBank() {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/user_bank",
  //   data: {
  //     newTotal: JSON.stringify(1000)
  //   },

  //   success: function (data) {
  //     $("#money-holder").text(data);
  //     // alert(JSON.parse(data));
  //   }
  // });
  // }
  // var ajax = new Request();
  // var method = "PUT";
  // var url = "/api/user_bank";
  // var asynchronous = true;
  // ajax.open(method, url, asynchronous);

  // ajax.send();
  // ajax.test = function () {
  //   if (this.readyState === 4 && this.status === 200) {
  //     var data = JSON.parse(this.responseText)
  //     console.log(data);
  //   }
  // }

  // }).then(function (total) {
  //   $("#money-holder").html("<strong>" + total + "</strong>");
  //   console.log(total);

  // });
  const counter = $("#counter").text(money);
  if (money === 0) {
    // isAnimate = false;
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
