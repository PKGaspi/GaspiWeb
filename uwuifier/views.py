from django.shortcuts import render
from uwuify import uwu, SMILEY
import logging

logger = logging.getLogger("uwus")

flags = SMILEY

# Create your views here.
def index(request):
    text, text_uwu = "", ""
    smiley = uwu(".", flags=flags)[2 :]
    placeholder = uwu("your text here!", flags=flags)
    result_text = uwu("here is your result!", flags=flags)
    make = uwu("make uwu!!", flags=flags)
    copy = uwu("copy to clipboard!", flags=flags)
    
    if request.method == "POST":
        text = request.POST["t"]
        text_uwu = uwu(text.lower(), flags=flags)
        logger.info("%s is uwuified:\n%s\n<------>\n%s", request.META["REMOTE_ADDR"], text, text_uwu)
    return render(request, "uwuifier/index.html", {
        "text": text,
        "text_uwu": text_uwu,
        "smiley": smiley,
        "placeholder": placeholder,
        "result_text": result_text,
        "make": make,
        "copy": copy,
    })
