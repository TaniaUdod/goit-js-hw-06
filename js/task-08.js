const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені!')
    } else {
        const formLogin = {
            email: email.value,
            password: password.value,
        };
    
    console.log(formLogin);
    form.reset();
  }
});