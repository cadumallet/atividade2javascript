function funcao(){
    var texto = document.getElementById('entrada').value;
    var Textoinvertido = texto.split('').reverse().join('')
    document.getElementById('resultado').textContent = Textoinvertido;
}