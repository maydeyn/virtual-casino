$(function() {
  var player = '<div id="player"></div>';
  $("#map").append(player);

  $(document).keydown(function(e) {
    var position = $("#player").position();
    var xPos = 0;

    switch (e.keyCode) {
      case 39: // Right
        xPos += 5;
        player.image = "./images/character/run5.png";
        break;
      case 37: // Left
        player.image.src = "./images/character/run5.png";
        xPos -= 5;
    }
  });
});
