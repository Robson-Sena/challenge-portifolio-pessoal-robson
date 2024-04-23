document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Captura valores nos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validar campos
    if (name.trim() === '' || name.length > 50) {
        alert('Por favor, insira um nome válido (até 50 caracteres).');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (subject.trim() === '' || subject.length > 50) {
        alert('Por favor, insira um assunto válido (até 50 caracteres).');
        return;
    }

    if (message.trim() === '' || message.length > 300) {
        alert('Por favor, insira uma mensagem válida (até 300 caracteres).');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}