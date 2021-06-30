var textareaAButtonBar = document.getElementById("source-dummydiv").parentNode.nextElementSibling;
var newBtn = document.createElement("a");
newBtn.id = "btnDeepLineBreak";
newBtn.innerHTML = "<img src='https://flaticons.net/custom.php?i=vqYSz7T449czIQIeIOvcWgv5YiE&format=png&size=256' height='22'>";
newBtn.style = "cursor: pointer; position: absolute; left: 60px; top: 5px;";
textareaAButtonBar.appendChild(newBtn);

document.getElementById("btnDeepLineBreak").addEventListener("click", function insertTest() {
    var textareaA = document.getElementById("source-dummydiv").previousElementSibling
    var tmpString = textareaA.value
    tmpString = tmpString.replace(/[\n\r]/g,' ');
    textareaA.value = tmpString;
    textareaA.focus();
})