var texts = [
    "copy succesfuw!",
    "doubwe coppy!!",
    "twipwe coppy!!!",
]
var more_texts = [
    "cwiticaw copy!!!!",
    "godwike copy!!!!",
    "supewefective copy!!!!",
    "wegendawy copy!!!!",
]

var n_copies = 0
var text = "";

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
    
    /* Alert the copied text */
    const copyBtn = document.getElementById("copy-btn")
    if (n_copies < texts.length){
	text = texts[n_copies];
	n_copies++;
	copyBtn.className = "btn btn-success"
    }
    else {
	var new_text = text;
	while (text.localeCompare(new_text) == 0) {
	    new_text = more_texts[Math.floor(Math.random() * more_texts.length)];
	}
	text = new_text;
	copyBtn.className = "btn btn-danger"
    }
    copyBtn.innerHTML = text + " " + document.getElementById("smiley").innerHTML;
    //alert("Copied the text: " + copyText.value);
}
