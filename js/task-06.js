const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    if (Number(textInput.dataset.length) === textInput.value.length) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});