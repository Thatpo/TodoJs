const button = document.getElementsByClassName("btn")[0];
const input = document.getElementsByClassName("input")[0];
const ul = document.getElementsByClassName("list")[0];

button.addEventListener("click", function () {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.style.listStyleType = "none";
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";

    })
    li.addEventListener("dblclick", function () {
        ul.removeChild(li);
    })
})

