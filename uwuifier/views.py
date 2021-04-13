from django.shortcuts import render
import uwuify

flags = uwuify.SMILEY

# Create your views here.
def index(request):
    text, text_uwu = "", ""
    smiley = uwuify.uwu(".", flags=uwuify.SMILEY)[2 :]
    placeholder = uwuify.uwu("your text here!", flags=flags)
    make = uwuify.uwu("make uwu!!", flags=flags)
    copy = uwuify.uwu("copy to clipboard!", flags=flags)
    
    if request.method == "POST":
        text = request.POST["t"]
        text_uwu = uwuify.uwu(text.lower(), flags=flags)
    return render(request, "uwuifier/index.html", {
        "text": text,
        "text_uwu": text_uwu,
        "smiley": smiley,
        "placeholder": placeholder,
        "make": make,
        "copy": copy,
    })
