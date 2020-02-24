document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (evt) {
        // Prevent reloading the web page
        evt.preventDefault();

        // first name must have a value
        let firstName = document.getElementById("firstName").value;

        document.getElementById("firstNameError").style.display = firstName.length > 0 ? "none" : "block";

        // last name must have a value
        let lastName = document.getElementById("lastName").value;

        document.getElementById("lastNameError").style.display = lastName.length > 0 ? "none" : "block";

        // email must have a value and be valid
        let email = document.getElementById("email").value;

        if (email.length > 0) {
            document.getElementById("invalidEmailError").style.display = /\S+@\S+\.\S+/.test(email) ? "none" : "block";
            document.getElementById("emailError").style.display = "none";
        }
        else {
            document.getElementById("emailError").style.display = "block";
            document.getElementById("invalidEmailError").style.display = "none";
        }

        // must be at least 10 characters long
        let message = document.getElementById("message").value;

        document.getElementById("messageError").style.display = message.length >= 10 ? "none" : "block";
    });
});
