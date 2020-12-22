/*
$(document).ready(function() {
    $("div").children().css({"color": "yellow", "border" : "3px solid yellow"});
});
*/
// Now , let's use only 1 p element with the class second

/*
$(document).ready(function() {
    $("div").children("p.second").css({"color":"yellow", "border": "3px solid yellow"});
});
*/

// Now, let's see how the find() method will work

/*
$(document).ready(function() {
    $("div").find("p").css({"color": "orange", "border": "3px solid orange"});
});
*/

// Now, we will take a look at the example that will take all the descendants

$(document).ready(function() {
    $("div").find("*").css({"color": "orange", "border": "3px solid orange"});
});