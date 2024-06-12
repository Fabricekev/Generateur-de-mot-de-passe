function generatePassword() {
        // recuperer la longueur du ;ot de passe
        let length = document.getElementById('lenght').value;
        // definir les caracteres a inclure dans notre mot de passe
        let character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
        if (document.getElementById('includes-numbers').checked) {
                character += '0123456789'
        }
        if (document.getElementById('includes-symbols').checked) {
                character += '\/][=`!@#$%^&*()_+-~?.,<>{}|";'
        }
        // initialisation de la variable qui stockera le mot de passe

        let password = '';

        // generation du mot de passe

        for (let i = 0; i < length; i++) {
                password += character.charAt(Math.floor(Math.random() * character.length) )
        }
        document.getElementById('password').textContent = password;
}

