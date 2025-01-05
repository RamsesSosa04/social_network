document.getElementById('registerForm').addEventListener('submit', function (event) {
    const password = document.querySelector('input[name="password"]').value;
    if (password.lenght > 6){
        alert('La contraseña debe tener al menos 6 caracteres.');
        event.preventDefault();
    }

});