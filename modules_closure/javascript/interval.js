'use strict';
/*jslint browser: true */
/*global window */

window.onload=function(){
    let clickMeButton=document.getElementById("clickme");
    clickMeButton.onclick=rudyTimer;
};

var rudyTimer = (function () {
    var timer = null;
    return function delayMsg() {
        let msg="Rudy! ";
        if (timer == null)
            timer = setInterval(printMe, 1000);
        else {
            clearInterval(timer);
            timer = null;
        }

        function printMe() {
            document.getElementById("output").innerHTML += msg;
        }
    };
})();