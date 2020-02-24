document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (evt) {
        // Prevent reloading the web page
        evt.preventDefault();

        // first name must have a value
        let firstName = document.getElementById("firstName").value;
        let firstNameError = document.getElementById("firstNameError");

        firstNameError.style.display = firstName.length > 0 ? "none" : "block";
    });


});
