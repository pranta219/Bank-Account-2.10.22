document.getElementById('login').addEventListener('click', function () {
    // get user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // Check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
})
