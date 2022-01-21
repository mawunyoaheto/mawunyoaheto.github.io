
let timer = null;

window.onload = function () {

    let btnPigLatin = document.getElementById("pigLatin");
    btnPigLatin.onclick = createPigLatin;

    let decButton = document.getElementById("btnBigger");
    decButton.onclick = timerCall;

    let chkBox = document.getElementById("ckbBling");
    chkBox.addEventListener('change', function modifyFontStyle() {
        let text = document.getElementById("myText");
        if (chkBox.checked) {
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('./images/hundred-dollar-bill.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } else {
            text.style.fontWeight = "";
            text.style.color = "";
            text.style.textDecoration = "none";
            document.body.style.backgroundImage = "none";
        }
    });

    let btnMalKovitch = document.getElementById("malkovitch");
    btnMalKovitch.onclick = malKovitch;
};

function timerCall() {

    if (timer === null)
        timer = setInterval(biggerDecoration, 500);
    else {
        clearInterval(timer);
        timer = null;
    }

    function biggerDecoration() {
        let textArea = document.getElementById("myText");
        let fontSize = parseInt(window.getComputedStyle(textArea).fontSize) - 4;
        fontSize += 2;
        textArea.style.fontSize = fontSize + "pt";
    }
}


function createPigLatin() {
    let textArea = document.getElementById("myText");
    if (textArea.value == "")
        return;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let words = textArea.value.split(" ");

    words.forEach(pigLatinFunction);
    function pigLatinFunction(value, index, array) {
        let vowelPosition = vowelLocation(value);
        
        if(vowelPosition==0)
            array[index] = value + "ay";
        else if (vowelPosition > 0)
            array[index] = value.substr(vowelPosition) + value.slice(0, vowelPosition) + "ay";
    }

    function vowelLocation(word) {

        if (word.length==1 && !isNaN(word.charAt(0))) //checks if its a single character and character is a number
            return -1;
          
        for (let i = 0; i < word.length; i++)
            if (vowels.includes(word[i]))
                return i;
    }
    textArea.value = words.join(" ");
}

function malKovitch() {
    let textArea = document.getElementById("myText");
    if (textArea.value == "")
        return;

    let words = textArea.value.split(" ");

    for (let i = 0; i < words.length; i++)
        if (words[i].length >= 5)
            words[i] = "Malkovitch";
    textArea.value = words.join(" ");
}
