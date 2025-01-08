document.getElementById('registerForm').addEventListener('submit', function (event) {
    const password = document.querySelector('input[name="password"]').value;
    const password_confirm = document.querySelector('input[name="confirm_password"]').value;

    console.log('register.js cargando correctamente')

    let errorDiv = document.getElementById('error-message');
    if(!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        error.style.color = 'red';
        document.getElementById('registerForm').prepend(errorDiv);
    }

    errorDiv.textContent = '';

    if(password.length < 6){
        errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        event.preventDefault();
        return;
    }

    if(password !== password_confirm){
        errorDiv.textContent = 'Las contraseñas no coinciden.';
        event.preventDefault();
        return;

    }

});