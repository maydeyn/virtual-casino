// version-b is an attempt to rework the html to more closely resemble the other games with a clean icon at the top and a graphic menu.

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

// function defining which bets to run comparison logic for
function newBet(betOption){
    if (betOption === "straight"){
        
    }else if(betOption === "split"){
        
    }else if(betOption === "street"){

    }else if(betOption === "doublestreet"){

    }else if(betOption === "corner"){

    }else if(betOption === "column"){

    }else if(betOption === "dozen"){

    }else if(betOption === "evenodd"){

    }else if(betOption === "redblack"){

    }else if(betOption === "highlow"){

    }else if(betOption === "basket"){

    }
   
}