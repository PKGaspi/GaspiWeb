var texts = [
    "copy succesfuw!",
    "doubwe copy!!",
    "twipwe copy!!!",
]

var happy_faces = [
    "(ノ*゜▽゜*)",
    "( ﾟ▽ﾟ)/",
    "(^・ω・^ )",
    "(*´꒳`*)",
    "(^-^*)/",
    "(⑅˘͈ ᵕ ˘͈ )",
    "◟(๑•͈ᴗ•͈)◞",
]

var more_texts = [
    "cwiticaw copy!!!!",
    "godwike copy!!!!",
    "supewefective copy!!!!",
    "wegendawy copy!!!!",
    "bestest copy!!!!",
    "copycopycopycopy!!!!"
]

var angry_faces = [
    "ヽ(♯｀Д´)ﾉ",
    "(/ﾟДﾟ)/",
    " ヾ(｀ε´)ﾉ",
    "（｀Δ´）！",
    "(๑･`▱´･๑)",
    "٩(๑`ȏ´๑)۶",
    "ヾ(*｀⌒´*)ﾉ",
]

var n_copies = 0
var text = "";
var face = "";

function copyToClipboard() {
    /* Get the text field */
    var copyStr = document.getElementById("resault").innerHTML;
    
    /* Create artificial textarea */
    const copyText = document.createElement('textarea');
    copyText.value = copyStr;
    document.body.appendChild(copyText);
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Remove artificial textarea */
    document.body.removeChild(copyText);
    
    /* Change button text */
    const copyBtn = document.getElementById("copy-btn")
    if (n_copies < texts.length){
	text = texts[n_copies];
	var old_face = face;
	while (face.localeCompare(old_face) == 0) {
	    face = happy_faces[Math.floor(Math.random() * happy_faces.length)];
	}
	n_copies++;
	copyBtn.className = "btn btn-success";
    }
    else {
	var old_text = text;
	while (text.localeCompare(old_text) == 0) {
	    text = more_texts[Math.floor(Math.random() * more_texts.length)];
	}
	var old_face = face;
	while (face.localeCompare(old_face) == 0) {
	    face = angry_faces[Math.floor(Math.random() * angry_faces.length)];
	}
	copyBtn.className = "btn btn-danger";
	setTimeout(function() {copyBtn.className += " shaking";}, 1);
    }
    copyBtn.innerHTML = text + " " + face;
}
