var toolbarBar = document.getElementsByClassName("lmt__source_toolbar lmt__source_toolbar--visible");
var newBtn = document.createElement("a");
newBtn.id = "btnDeepLineBreak";
newBtn.innerHTML = "<img src='https://addons.mozilla.org/user-media/addon_icons/2710/2710544-64.png?modified=cbfd9850' style='height:30px;'>";
newBtn.style = "cursor: pointer; position: absolute; left: 20px;";
toolbarBar[0].appendChild(newBtn);

document.getElementById("btnDeepLineBreak").addEventListener("click", function insertTest() {
    var oldUrl = document.location.href
    var newUrl = oldUrl.replace(/%0A/g, ' ')
    document.location.href = newUrl
})