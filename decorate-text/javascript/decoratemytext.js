

window.onload = function () {
    var decButton = document.getElementById("btnBigger");
    decButton.onclick = biggerDecoration;

    var chkBox = document.getElementById("ckbBling");

    chkBox.addEventListener('change',function modifyFontStyle(){
        var text = document.getElementById("myText")
        if (chkBox.checked) {
            alert('checked');
           text.style.fontWeight = "bold";
           text.style.color = "green";
           text.style.textDecoration = "underline";
        }else{
            alert('unchecked');
           text.style.fontWeight = "";
           text.style.color = "";
           text.style.textDecoration = "none";
        }
    })
    // chkBox.onchange = modifyFontStyle();
}

function biggerDecoration() {
    document.getElementById("myText").style.fontSize = "24pt";
}

// function modifyFontStyle() {

//     

//     if () {
//         alert('checked');
//        text.style.fontWeight = "bold";
//        text.style.color = "green";
//        text.style.textDecoration = "underline";
//     }else{
//         alert('unchecked');
//        text.style.fontWeight = "";
//        text.style.color = "";
//        text.style.textDecoration = "none";
//     }


// }
