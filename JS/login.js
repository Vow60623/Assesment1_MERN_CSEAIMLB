
function login() {
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    if (userId === '' || password === '') {
        alert('User ID and Password cannot be empty');
        return;
    }

    if (userId !== 'ABES' || password !== 'abes') {
        alert('Invalid User ID or Password');
        return;
    }

    window.location.href = 'welcome.html';
}
