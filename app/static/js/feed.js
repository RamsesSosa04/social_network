document.getElementById('postForm').addEventListener('submit', function (event) {
    const content =document.querySelector('textarea[name = "content"]').value;

    if (content.trim() === ''){
        alert('La publicación no puede estar vacía.');
        event.preventDefault();
    }

});