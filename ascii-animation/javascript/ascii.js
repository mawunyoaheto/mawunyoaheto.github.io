'use strict';
var currentAnimation;
var startButton;
var stopButton;
var animation;
var animationSelect;
var animationSize;
var chkBoxSpeed;
var animating = false;
var delay = 250;

window.onload = () => {

    startButton = document.getElementById("start");
    startButton.onclick = startAnimation;
    startButton.disabled=true;

    stopButton = document.getElementById("stop");
    stopButton.onclick = stopAnimation;
    stopButton.disabled=true

    animationSelect = document.getElementById("animations");
    animationSelect.onchange = changeAnimation;

    animationSize = document.getElementById("size");
    animationSize.onchange = changeSize;

    chkBoxSpeed = document.getElementById("speed");
    chkBoxSpeed.onchange = onTurboChecked;
}


function startAnimation() {
    startButton.disabled = true;
    stopButton.disabled = false;
    animationSelect.disabled = true;

    if (currentAnimation) {
        const animArray = ANIMATIONS[currentAnimation].split("=====\n");
        let currentFrame = 0;

        animation = setInterval(() => {
            document.getElementById("txtAnimation").value = animArray[currentFrame];
            currentFrame = (currentFrame === animArray.length - 1) ? 0 : currentFrame + 1;
        }, delay);
        animating = true;
    }
}

function stopAnimation() {
    startButton.disabled = false;
    stopButton.disabled = true;
    animationSelect.disabled = false;
    clearInterval(animation);
    animating = false;
}

function changeAnimation() {
    currentAnimation = animationSelect.value;
    document.getElementById("txtAnimation").value = ANIMATIONS[currentAnimation].split("=====\n")[0];

    if (currentAnimation.toLowerCase() !== "blank" && !animating)
        startButton.disabled = false;

    if (currentAnimation.toLowerCase() === "blank"){
        startButton.disabled = true;
        stopButton.disabled = true;
    }
        

}

function changeSize() {
    makeSizer(animationSize.value)();
    //resize 
    function makeSizer(size) {
        return function () {
            document.getElementById("txtAnimation").style.fontSize = size;
        };
    }
}

const onTurboChecked = () => {
    delay = chkBoxSpeed.checked ? 50 : 250;
    if (animation) {
        clearInterval(animation);
        startAnimation();
    }
}



