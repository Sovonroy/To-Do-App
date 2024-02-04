let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i><i1 class="fa-sharp fa-solid fa-pen"></i1>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        newEle.querySelector("i1").addEventListener("click", edit);
        function remove() {
            newEle.remove()
        }
        function edit() {
            let updatedText = prompt("Edit Task:",inputs.value);
            if (updatedText !== null) {
                newEle.firstChild.nodeValue = updatedText;
            }
        }
    }
}
var input = document.getElementById("inp");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});
