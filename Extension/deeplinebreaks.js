var toolbarBar = document.getElementsByClassName("lmt__source_toolbar lmt__source_toolbar--visible");
var newBtn = document.createElement("a");
newBtn.id = "btnDeepLineBreak";
newBtn.innerHTML = "<img src='https://addons.mozilla.org/user-media/addon_icons/2710/2710544-64.png?modified=cbfd9850' style='height:30px;'>";
newBtn.style = "cursor: pointer; position: relative; right: 0%; top: -3px";
toolbarBar[0].appendChild(newBtn);

document.getElementById("btnDeepLineBreak").addEventListener("click", function insertTest() {
    var threshold = 1300;
    var textareaObject = document.querySelector('p');

    if (getCharactersInTextarea(textareaObject) >= threshold) {
        // remove all linebreaks in the textarea
        var tmpString = textareaObject.textContent;
        tmpString = tmpString.replace(/[\n\r]/g,' ');
        textareaObject.textContent = tmpString;
        textareaObject.focus();
    }else{
        // remove all linebreaks in the url
        var oldUrl = document.location.href
        var newUrl = oldUrl.replace(/%0A/g, ' ')
        document.location.href = newUrl
    }
})

function getCharactersInTextarea(textareaObject) {
    return(textareaObject.textContent.length)
}