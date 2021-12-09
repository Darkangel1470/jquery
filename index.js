text=$("h2")
text.css("position", "absolute");

$("#left").click(function() {
    text.css('right', "+=10px");
})
$("#right").click(function() {
    text.css('left', "+=10px");
})
$("#up").click(function() {
    text.css('bottom', "+=10px");
})
$("#down").click(function() {
    text.css('top', "+=10px");
})

