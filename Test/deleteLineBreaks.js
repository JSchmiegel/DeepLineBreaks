function deleteLineBreaks() {
    var textarea = document.getElementById("textarea");
    var tmpString = textarea.value;
    tmpString = tmpString.replace(/[\n\r]/g,' ');
    textarea.value = tmpString;
}