function mostrarsenha(){
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    }

    else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}


function mostrarSenha() {
    var inputPass = document.getElementById('password2');
    var btnShowPass = document.getElementById('btn-senha2');
    
    if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
    inputPass.setAttribute('type', 'password');
    btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
    } 