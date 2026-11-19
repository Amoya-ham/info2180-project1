/* Add your JavaScript to this file */

// The script is loaded in the <head>, so wait until the page has been built
// before looking for the form and the message area.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".newsletter .message");

    // Let our own code (below) decide what a valid email is,
    // instead of the browser's pop-up bubble.
    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        // Stop the form from reloading the page
        event.preventDefault();

        var email = emailInput.value.trim();
        var looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (email === "" || !looksLikeEmail) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
});
