
var timer = null;

window.onload = function () {

    var btnPigLatin = document.getElementById("pigLatin");
    btnPigLatin.onclick = createPigLatin;

    var decButton = document.getElementById("btnBigger");
    decButton.onclick = timerCall;

    var chkBox = document.getElementById("ckbBling");
    chkBox.addEventListener('change', function modifyFontStyle() {
        let text = document.getElementById("myText")
        if (chkBox.checked) {
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            text.style.fontWeight = "";
            text.style.color = "";
            text.style.textDecoration = "none";
        }
    });

    var btnMalKovitch = document.getElementById("malkovitch");
    btnMalKovitch.onclick = malKovitch;
}

function timerCall() {

    if (timer == null)
        timer = setInterval(biggerDecoration, 500);
    else {
        clearInterval(timer);
        timer = null;
    }
}

function biggerDecoration() {
    let textArea = document.getElementById("myText");
    let fontSize = parseInt(window.getComputedStyle(textArea).fontSize) - 4;
    alert(fontSize);
    fontSize += 2;
    textArea.style.fontSize = fontSize + "pt";
}


function createPigLatin() {
    var textArea = document.getElementById("myText");
    if (textArea.value == "")
        return;

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var words = textArea.value.split(" ");

    words.forEach(pigLatinFunction);
    function pigLatinFunction(value, index, array) {
        var result = vowelLocation(value);

        if (result > 0)
            array[index] = value.substr(result) + value.slice(0, result) + "ay";
        else
            array[index] = value + "ay";
    }

    function vowelLocation(word) {

        alert(word.match(/\d+/g));
        if (typeof word == Number)
            return -1;
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i]))
                return i;
        }
    }

    textArea.value = words.join(" ");
}

function malKovitch() {
    var textArea = document.getElementById("myText");
    if (textArea.value == "")
        return;

    var words = textArea.value.split(" ");

    for (let i = 0; i < words.length; i++)
        if (words[i].length >= 5)
            words[i] = "Malkovitch";
    textArea.value = words.join(" ");
}
