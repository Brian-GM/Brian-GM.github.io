        function canSubmit() {
            const currentTime = new Date().getTime();
            const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
            const submissionCooldown = 5 * 60 * 1000; // 5 minutos en milisegundos

            if (lastSubmissionTime && (currentTime - lastSubmissionTime < submissionCooldown)) {
                alert("Por favor, espera antes de enviar otro formulario.");
                return false;
            } else {
                localStorage.setItem('lastSubmissionTime', currentTime);
                return true;
            }
        }

        function handleSubmit(event) {
            if (!canSubmit()) {
                event.preventDefault();
            } else {
                alert("Formulario enviado con éxito!");
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', handleSubmit);
        });
