    (function() {
        emailjs.init("XQzJdLZ3yaqhrTjOJ"); // Reemplaza con tu user ID de EmailJS
    })();

    const submissionCooldown = 60 * 60 * 1000; // 1 hora en milisegundos
    const maxSubmissions = 5; // Número máximo de envíos permitidos por hora

    function canSubmit() {
        const currentTime = new Date().getTime();
        const submissionData = JSON.parse(localStorage.getItem('submissionData')) || { count: 0, firstSubmissionTime: currentTime };

        if (currentTime - submissionData.firstSubmissionTime >= submissionCooldown) {
            submissionData.count = 0;
            submissionData.firstSubmissionTime = currentTime;
        }

        if (submissionData.count >= maxSubmissions) {
            alert("You have reached your hourly sending limit. Please wait before trying again");
            return false;
        } else {
            submissionData.count += 1;
            localStorage.setItem('submissionData', JSON.stringify(submissionData));
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!canSubmit()) {
            return;
        }

        // Obtiene los valores del formulario
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Parámetros del servicio de EmailJS
        let params = {
            name: name,
            email: email,
            message: message
        };

        // Envía el correo utilizando EmailJS
        emailjs.send("service_ou4dz0t", "template_htwh7fb", params)
            .then(function(response) {
                alert("Mail sent correctly.");
                document.getElementById("contactForm").reset();


            }, function(error) {
                alert("An error occurred while sending the mail.");
            });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', handleSubmit);
    });