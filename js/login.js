const defaultUserName = 'abhishek';
const defaultPassword = 'password@123';

function login() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("password").value;
    if (username == defaultUserName && password == defaultPassword) {
        alert("login successful");
    } else {
        alert("login unsuccessful");
    }
}

function clearForm() {
    document.getElementById("Username").value = '';
    document.getElementById("password").value = '';
}