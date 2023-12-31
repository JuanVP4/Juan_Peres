// cadastro-login.js

function doSignup() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('senha').value;

    // armazenamento local
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o e-mail já está cadastrado
    var existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        alert('E-mail já cadastrado. Use outro e-mail.');
    } else {
        // Adiciona o novo usuário à lista
        var newUser = {
            fullname: fullname,
            email: email,
            password: password
        };

        users.push(newUser);
        
        localStorage.setItem('users', JSON.stringify(users));

        showSuccessMessage();
    }
}

function doLogin() {
    var email = document.getElementById('username').value; // Alterado para 'username'
    var password = document.getElementById('password').value;
    
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica as credenciais
    var loggedInUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (loggedInUser) {
        alert('Login bem-sucedido!');
        window.location.href = 'selecionarquadras.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }

    // Verifica as credenciais
    var loggedInUser = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            loggedInUser = users[i];
            break; // Encontrou o usuário, podemos sair do loop
        }
    }
}

function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    
    setTimeout(function() {
        successMessage.classList.add('hidden');
    }, 3000);
}
