function biggerText() {
    document.getElementById("textInput").style.fontSize = "2em";
}

function fancyText() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
    }
}

function boringText() {
    if (document.getElementById("boring").checked) {
        document.getElementById("textInput").style.fontWeight = "normal";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
    }
}

function mooText() {
    var text = document.getElementById("textInput").value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    text = sentences.join(".");
    document.getElementById("textInput").value = text;
}