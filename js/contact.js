document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (evt) {
        // Prevent reloading the web page
        evt.preventDefault();

        // first name must have a value
        let firstName = document.getElementById("firstName").value;

        document.querySelector("#firstName + .form-error").style.display = firstName.length > 0 ? "none" : "block";

        // last name must have a value
        let lastName = document.getElementById("lastName").value;

        document.querySelector("#lastName + .form-error").style.display = lastName.length > 0 ? "none" : "block";

        // email must have a value and be valid
        let email = document.getElementById("email").value;
        let error = document.querySelectorAll("#email ~ .form-error");

        if (email.length > 0) {
            error[1].style.display = /\S+@\S+\.\S+/.test(email) ? "none" : "block";
            error[0].style.display = "none";
        }
        else {
            error[0].style.display = "block";
            error[1].style.display = "none";
        }

        // must be at least 10 characters long
        let message = document.getElementById("message").value;

        document.querySelector("textarea ~ .form-error").style.display = message.length >= 10 ? "none" : "block";
    });
});
