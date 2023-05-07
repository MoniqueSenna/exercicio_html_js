//seleciona o formulário
const form = document.getElementById('form');
// seleciona os campos de entrada
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const numero_1 = document.getElementById('numero_1');
const numero_2 = document.getElementById('numero_2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const nomeInputValue = nomeInput.value.trim()
    const emailInputValue = emailInput.value.trim()
    const telInputValue = telInput.value.trim()

    if(nomeInput.value === '') {
        //mostrar error
        //add classe
        setErrorFor(nomeInput, 'Campo Obrigatório');
    } else if(nomeInputValue.length < 3) {
        setErrorFor(nomeInput, 'Preencher nome completo');
    } else {
        //adicionar a classe de sucesso
        setSuccessoFor(nomeInput);
    }

    if(emailInput.value === '') {
        //mostrar erro
        //add classe
        setErrorFor(emailInput, 'Preencha esse campo');
    } else if (!isEmail(emailInputValue)) {
        setErrorFor(emailInput, 'Email inválido');
    } else {
        //adicionar a classe de sucesso
        setSuccessoFor(emailInput);
}

if(telInput.value === '') {
    //mostrar erro
    //add classe
    setErrorFor(telInput, 'Preencha esse campo');
} else if (!isTel(telInputValue)) {
    setErrorFor(telInput, 'Telefone inválido');
} else {
    //adicionar a classe de sucesso
    setSuccessoFor(telInput);
}

function setErrorFor(input, message) {
    const campo = input.parentElement;
    const small = campo.querySelector('small')

    small.innerText = message

    campo.className = 'campo erro'
    campo.classEmail = 'campo erro'
    campo.classTel = 'campo erro'
}

function setSuccessoFor(input) {
    const campo = input.parentElement;

    campo.className = 'campo sucesso'
    campo.classEmail = 'campo sucesso'
    campo.classTel = 'campo sucesso'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function isTel(tel) {
    return /^[0-9]{10,11}$/.test(tel)
    }
};

form.addEventListener('submit', (event) => {
    if (numero_1.value === '' || numero_2.value === '') {
        alert('selecione uma opção válida para ambos os casos');
        
    } else if (numero_1.value >= numero_2.value) {
        alert('o valor de A é maior ou igual ao valor de B - favor preencher com outros valores...')
        event.preventDefault();
        
    } else {
        alert('o valor de B é maior ou igual ao valor de A - Obrigada!')
        //envia o formulário se tudo estiver ok
        form.submit();
    }
});


    
