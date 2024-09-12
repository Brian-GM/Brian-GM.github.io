// Inicializa EmailJS
(function() {
    emailjs.init("XQzJdLZ3yaqhrTjOJ"); // Reemplaza TU_USER_ID con tu user ID de EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

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
        alert("Correo enviado correctamente.");
    }, function(error) {
        alert("Ocurrió un error al enviar el correo.");
    });
});
