var code = "utm_source=homepage&amp;utm_medium=billboard&amp;utm_campaign=slide";
var board = document.getElementById("billboard");
var slides = board.getElementsByTagName("a");
for(var i=0;i<slides.length;i++) {
    var url = slides[i].getAttribute("href");
    var separator = "?";
    if (url.indexOf('?') !=-1) {
        separator = "&amp;";
    }
    slides[i].setAttribute("href", url + separator + code + "-" + i);
}