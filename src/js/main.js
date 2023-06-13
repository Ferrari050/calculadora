function inserir(numero2){
    var numero1 = document.getElementById('resultado-numerico').innerHTML;
    document.getElementById('resultado-numerico').innerHTML = numero1 + numero2;
}

function limpar(){
    document.getElementById('resultado-numerico').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado-numerico').innerHTML;
    document.getElementById('resultado-numerico').innerHTML = resultado.substring(0, resultado.length -1);  
}
function calcular(){
    var resultado = document.getElementById('resultado-numerico').innerHTML;
    if (resultado) {
        document.getElementById('resultado-numerico').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado-numerico').innerHTML = "Error!"
    }
}