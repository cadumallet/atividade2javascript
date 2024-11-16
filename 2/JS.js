var  nomes=[];

function funcaoadicionar(){
    var adicionarnome = document.getElementById('entrada').value;
    nomes.push(adicionarnome);
}

function funcaolistar(){
    if (nomes.length > 0) {
        var lista = nomes.join('-');
        document.getElementById('resultado').textContent = lista;
        
    }
    else {
        alert ('vazio')
    }
}
function funcaobuscar(){
    var nomebuscar = document.getElementById('entrada').value;
    var buscaresultado = nomes.indexOf(nomebuscar);
    if (buscaresultado !== -1) {
        alert ('nome encontrado')
        
    }
    else {
        alert ('nome não encontrado')
    }
}
function funcaoremover(){
    var nomeremover = document.getElementById('entrada').value;
    var removerresultado = nomes.indexOf(nomeremover);
    if (removerresultado !== -1) {
        nomes.splice(removerresultado, 1);
    }
    else{
        alert('esse nome  já não existe')
    }
}