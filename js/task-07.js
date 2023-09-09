// const textInput = document.querySelector("#font-size-control");
// const textSize = document.querySelector("#text");

// textSize.style.fontSize = `${textInput.value}px`;

// textInput.addEventListener("input", () => {
//     textSize.style.fontSize = `${textInput.value}px`;
// });

const refs = {
    input: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
};

refs.spanText.style.fontSize = `${refs.input.value}px`;

refs.input.addEventListener("input", () => {
    refs.spanText.style.fontSize = `${refs.input.value}px`;
});