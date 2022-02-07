//'use strict';

$("#comments").on("keyup", function () {
    var limit = 150;
    var charactersTyped = $(this).val().length;
    var charactersRemaining = limit - charactersTyped;

    if(charactersTyped == 0 || charactersTyped == limit)
    {
        
        $("#countcharacters").text("You have "+ charactersRemaining + " characters left out of "+ limit);
    } else{
        $("#countcharacters").text(charactersRemaining + " characters left ");
    }
});
