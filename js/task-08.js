const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const {email, password} = event.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
        alert('Please fill in all the fields!')
    } else {
        const formLogin = {
            email: email.value,
            password: password.value,
        };
    
    console.log(formLogin);
    form.reset();
  }
});