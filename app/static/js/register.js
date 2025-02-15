document.getElementById('registerForm').addEventListener('submit', function (event) {
    const password = document.querySelector('input[name="password"]')?.value;
    const password_confirm = document.querySelector('input[name="confirm_password"]')?.value;

    const modal = document.getElementById('errorModal');
    const modalMessage = document.getElementById('modal-message');
    const closeBtn = document.querySelector('.close');

    // Mostrar el modal
    const showModal = (message) => {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    };

    // Cerrar el modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Validar longitud de la contraseña
    if (password.length < 6) {
        showModal('La contraseña debe tener al menos 6 caracteres.');
        event.preventDefault();
        return;
    }
    // Validar que las contraseñas coincidan
    if (password !== password_confirm) {
        showModal('Las contraseñas no coinciden.');
        event.preventDefault();
        return;
    }
});
