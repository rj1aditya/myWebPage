document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const hiddenMenu = document.getElementById("hidden-menu");

    burgerMenu.addEventListener("click", function () {
        hiddenMenu.classList.toggle("show");
        console.log("burger menu clicked");
    });

    const contactForm = document.getElementById("contact-me-form");
    const responseMessage = document.getElementById("response-message"); // Add an element to display the response

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("Username").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const userData = {
            name,
            email,
            message
        };

        fetch("/server/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data); // Log the response data to the console

            // Display the response message on the webpage
            if (data.success) {
                alert("Request sent successfully!");
                contactForm.reset();
            } else {
                alert("Request failed, pleae try later.");
            }
        })
        .catch(error => {
            console.error(error);
        });
    });
});
