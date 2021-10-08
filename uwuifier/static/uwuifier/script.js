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
    "copycopycopycopycopycopycopycopy!!!!",
    "mowe copy!!1!",
    "incwedibwe copy!!!!",
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
    /* Find the textarea to copy */
    const copyText = document.getElementById("result").innerHTML;

    // Create a temp textarea to copy the text to.
    const copyArea = document.createElement("textarea");
    copyArea.innerHTML = copyText;
    document.body.appendChild(copyArea);

    /* Select the text field */
    copyArea.select();
    copyArea.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    // navigator.clipboard.writeText(copyArea.value); // Preffered, but only works with HTTPS 
    
    // Remove temp textarea.
    document.body.removeChild(copyArea);

    /* Change button text */
    const copyBtn = document.getElementById("copy-btn");
    if (n_copies < texts.length){
        text = texts[n_copies];
        var old_face = face;
        while (face.localeCompare(old_face) == 0) {
            face = happy_faces[Math.floor(Math.random() * happy_faces.length)];
	    }
        n_copies++;
        copyBtn.classList.remove("btn-info");
        copyBtn.classList.add("btn-success");
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
        copyBtn.classList.remove("btn-success");
        copyBtn.classList.add("btn-danger");
        copyBtn.classList.remove("shaking");
        setTimeout(function() {copyBtn.classList.add("shaking");}, .1);
    }
    copyBtn.innerHTML = text + " " + face;
}
