import { showModalMessage } from "./modal.js";

export function initializeFormSubmission() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('first-name').value;

        emailjs.sendForm('service_39s7oua', 'template_8mrqiqf', '#contact-form')
            .then(function(response) {
                showModalMessage(`Hello, ${name}!`, "I received your message, thank you for writing. I will reply as soon as I can.");
                document.getElementById('contact-form').reset();
            }, function(error) {
                showModalMessage(`Hello, ${name}!`, "Unfortunately, an unexpected error occurred and I was unable to receive your message :( Please email me instead at <a href='mailto:egorpoplevka@gmail.com' class='link-modal' target='_blank'>egorpoplevka@gmail.com</a>");
            });
    });
}