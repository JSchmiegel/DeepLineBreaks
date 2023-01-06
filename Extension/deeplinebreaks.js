var textareaAButtonBar = document.getElementById("source-dummydiv").parentNode.nextElementSibling;
var newBtn = document.createElement("a");
newBtn.id = "btnDeepLineBreak";
newBtn.innerHTML = "<img src='https://addons.mozilla.org/user-media/addon_icons/2710/2710544-64.png?modified=cbfd9850' height='22'>";
newBtn.style = "cursor: pointer; position: absolute; left: 60px; top: 5px;";
textareaAButtonBar.appendChild(newBtn);

document.getElementById("btnDeepLineBreak").addEventListener("click", function insertTest() {
    var oldUrl = document.location.href
    var newUrl = oldUrl.replace(/%0A/g, ' ')
    document.location.href = newUrl
})