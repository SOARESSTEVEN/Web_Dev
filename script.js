// Função para validar o campo Nome
function validacaoNome() {
    const nome = document.getElementById('nome').value;
    const spanNome = document.getElementsByTagName('span')[0];
    if (nome.length < 10) {
        spanNome.style.display = 'block';
    } else {
        spanNome.style.display = 'none';
    }
}

// Função para validar o campo Apelido
function validacaoApelido() {
    const apelido = document.getElementById('apelido').value;
    const spanApelido = document.getElementsByTagName('span')[1];
    if (apelido.length < 30) {
        spanApelido.style.display = 'block';
    } else {
        spanApelido.style.display = 'none';
    }
}

// Função para validar o campo Password
function validarPassword() {
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;
    const spanPassword = document.getElementsByTagName('span')[2];
    if (password !== confirmarPassword) {
        spanPassword.style.display = 'block';
    } else {
        spanPassword.style.display = 'none';
    }
}

// Função para submeter o formulário
function submitForm() {
    // Validações antes de enviar
    const nome = document.getElementById('nome').value;
    const apelido = document.getElementById('apelido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    if (nome.length < 10) {
        alert('Nome deve ter no mínimo 10 caracteres.');
        return false;
    }
    if (apelido.length < 30) {
        alert('Apelido deve ter no mínimo 30 caracteres.');
        return false;
    }
    if (password !== confirmarPassword) {
        alert('As senhas não coincidem.');
        return false;
    }
    
    // Exemplo de envio do formulário
    alert('Formulário enviado com sucesso!');

    // Limpar o formulário
    document.getElementById('form').reset();
    return true;
}

// Adicionar evento de clique ao botão de envio
document.querySelector('.butaosubmit input').addEventListener('click', submitForm);
