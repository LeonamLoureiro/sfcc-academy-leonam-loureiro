//'use strict';
    var limit = 150;

    $("#countcharacters").text("You have "+ limit + " characters left out of "+ limit);

$("#comments").on("keyup", function () {
    
    var charactersTyped = $(this).val().length;
    var charactersRemaining = limit - charactersTyped;

    $("#countcharacters").text("You have "+ charactersRemaining + " characters left out of "+ limit);
    
       
    
});
