'use strict';

$(document).on("input", "#comments", function () {
    var limit = 150;
    var charactersTyped = $(this).val().length;
    var charactersRemaining = limit - charactersTyped;

    $(".countcharacters").text(charactersRemaining);
});
