'use strict';

$(document).on("keydown", "#comments", function () {
    var charactersRemaining = 255;
    var charactersTyped = parseInt($(this).val().length);
    var charactersRemaining = charactersRemaining - charactersTyped;

    $("#comments").text(charactersRemaining);
});
