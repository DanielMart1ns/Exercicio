const dados = document.querySelector('form#dados-entrada')

dados.addEventListener('submit', function(x){
    x.preventDefault()
}) //Evitando o update da página após o submit

//transformando os elementos input type=button em variáveis
var botao = document.querySelector('input#btn-verificar')
const botao_avancar = document.querySelector('input#btn-avancar')

//transformando os elementos input type=number (valor A & B) em variáveis
var n1 = document.getElementById('nA')
var n2 = document.getElementById('nB')


//Adicionando eventos ao click dos botões
botao.addEventListener('click', validar)
botao_avancar.addEventListener('click', resetar)

//Funções de evento
n1.addEventListener('keyup', function(x){ //validação se o valor (A) é negativo ou se há dados no campo
    if(parseInt(n1.value) < 0){
        //removendo mensagens/itens anteriores
        document.getElementById('igual-message').style.display = 'none'
        document.getElementById('btn-avancar').style.display = 'none'
        document.getElementById('sucess-message').style.display = 'none'
        document.getElementById('error-message').style.display = 'none'
        n1.classList.remove('valores-iguais')
        n1.classList.remove('sucess')
        

        //Mostrando mensagem de valor negativo
        document.getElementById('valor_negativo').style.display = 'block'
        n1.classList.add('error')
        document.querySelector('input#btn-verificar').style.display = 'none'
    }
    if (parseInt(n1.value) >= 0 && parseInt(n2.value) >= 0){
        document.getElementById('valor_negativo').style.display = 'none'
        document.querySelector('input#btn-verificar').style.display = 'block'
    }
    if (parseInt(n1.value) >= 0){
        n1.classList.remove('error')
        n1.classList.remove('valores-iguais')
        n1.classList.remove('sucess')
    }
})

n2.addEventListener('keyup', function(y){ //validação se o valor (B) é negativo
    if(parseInt(n2.value) < 0){
        //removendo mensagens/itens anteriores
        document.getElementById('igual-message').style.display = 'none'
        document.getElementById('btn-avancar').style.display = 'none'
        document.getElementById('sucess-message').style.display = 'none'
        document.getElementById('error-message').style.display = 'none'
        n2.classList.remove('valores-iguais')
        n2.classList.remove('sucess')

        //Mostrando mensagem de valor negativo
        document.getElementById('valor_negativo').style.display = 'block'
        n2.classList.add('error')
        document.querySelector('input#btn-verificar').style.display = 'none'
    }
    else if(parseInt(n2.value) >= 0 && parseInt(n1.value) >= 0){
        document.getElementById('valor_negativo').style.display = 'none'
        document.querySelector('input#btn-verificar').style.display = 'block'
    }

    if(parseInt(n2.value) >= 0){
        n2.classList.remove('error')
        n2.classList.remove('valores-iguais')
        n2.classList.remove('sucess')
    }
})

function validar(){ //validação principal
    if(parseInt(n1.value) > parseInt(n2.value)){ 
        //removendo itens de valores iguais
        document.getElementById('igual-message').style.display = 'none'
        n1.classList.remove('valores-iguais')
        n2.classList.remove('valores-iguais')

        //removendo itens de sucesso
        document.getElementById('btn-avancar').style.display = 'none'
        document.getElementById('sucess-message').style.display = 'none'
        n2.classList.remove('sucess')

        //adicionando itens de erro
        document.getElementById('error-message').style.display = 'block'
        n1.classList.add('error')
    }
    else if(parseInt(n2.value) > parseInt(n1.value)){
        //removendo itens de valores iguais
        document.getElementById('igual-message').style.display = 'none'
        n1.classList.remove('valores-iguais')
        n2.classList.remove('valores-iguais')

        //removendo itens de erro anteriores
        document.getElementById('error-message').style.display = 'none'
        n1.classList.remove('error')

        //adicionando itens de sucesso
        document.getElementById('sucess-message').style.display = 'block'
        n2.classList.add('sucess')
        document.getElementById('btn-avancar').style.display = 'block'
    }
    else{
        //removendo itens de erro anteriores
        document.getElementById('error-message').style.display = 'none'
        n1.classList.remove('error')

        //removendo itens de sucesso
        document.getElementById('btn-avancar').style.display = 'none'
        document.getElementById('sucess-message').style.display = 'none'
        n2.classList.remove('sucess')

        //Adicionando itens de valores iguais
        document.getElementById('igual-message').style.display = 'block'
        n1.classList.add('valores-iguais')
        n2.classList.add('valores-iguais')
    }
}

function resetar(){ //função de resetar o layout
    //limpando mensagens de sucesso e escondendo btn-avancar
    n2.classList.remove('sucess')
    document.getElementById('sucess-message').style.display = 'none'
    document.getElementById('btn-avancar').style.display = 'none'
    
    //limpando dados dos campos
    n1.value = ''
    n2.value = ''

    n2.classList.remove('error')
    n2.classList.remove('valores-iguais')
    n2.classList.remove('sucess')

    n1.classList.remove('error')
    n1.classList.remove('valores-iguais')
    n1.classList.remove('sucess')
}