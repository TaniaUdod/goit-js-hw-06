const textInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    textSize.style.fontSize = `${textInput.value}px`;
});