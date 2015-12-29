/*jslint browser: true*/
/*global $, jQuery, alert*/
function genText() {
    'use strict';
    var part1 = ["Sorry, I have to leave,", "Oh shit,", "I g2g now,", "Catch you later,", "Oh snap,", "Sorry but,", "Oh...my...gosh,", "Whoops, I'm late,", "Gotta run,", "Brb,", "Fml,", "Yup,"],
        part2 = ["I need to sort my socks.", "my cat's on fire.", "I left my brain at the bus stop.", "there's a serial killer right behind me.", "my house is being vandalized.", "my prize dog just imploded.", "my complier finally finished", "the NSA is after me.", "my coffee grinder is trying to eat my roommate.", "my fish is drowning.", "that's how I died."];
    return part1[Math.floor(Math.random() * part1.length)] + " " + part2[Math.floor(Math.random() * part2.length)];
}

$(document).ready(function () {
    "use strict";
    $("#generate").click(function () {
        $("#box").val(genText());
    });
});
