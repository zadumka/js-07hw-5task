const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("All form fields must be filled in")
    } else {
        const obj = {};
        obj.email = email.trim();
        obj.password = password.trim();
        console.log(obj);

        form.reset();
    }
}
