// straight bet number counter by Harry Manchanda at zurb foundation
$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val <= 35) {
        $input.val(val + 1);
    }
    
  });
  
  $('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val >= 2 ) {
        $input.val(val - 1);
    }
    
  })
  
//   creating the local storage
function logBets(list){
    for (let i = 0; i < list.length; i++) {
       var singleBet = $("<p>");
       singleBet
        
    }
}