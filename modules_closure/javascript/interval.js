'use strict';
var rudyTimer = (function () {
    var timer = null;
    return function delayMsg() {
        if (timer == null)
            timer = setInterval(printMe, 1000);
        else {
            clearInterval(timer);
            timer = null;
        }

        function printMe() {
            document.getElementById("output").innerHTML += "Rudy! ";
        }
    };
})();