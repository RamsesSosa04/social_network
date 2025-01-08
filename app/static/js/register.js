document.getElementById('registerForm').addEventListener('submit', function (event) {
    const password = document.querySelector('input[name="password"]')?.value;
    const password_confirm = document.querySelector('input[name="confirm_password"]')?.value;

    console.log('register.js cargando correctamente');

    let errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.style.color = 'red';
        document.getElementById('registerForm').prepend(errorDiv);
    }

    // Limpiar mensajes de error previos
    errorDiv.textContent = '';

    // Validar longitud de la contraseña
    if (password.length < 6) {
        errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        event.preventDefault();
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== password_confirm) {
        errorDiv.textContent = 'Las contraseñas no coinciden.';
        event.preventDefault();
        return;
    }
});
