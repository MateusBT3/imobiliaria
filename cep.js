function buscaCep(){
    let cep = document.getElementById('txtCep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/{cep}" + cep;
        
        let resultado = new XMLHttpRequest();
        resultado.open("GET", url);
        resultado.send();

        resultado.onload = function(){
            if(resultado.status === 200){
                let endereco = JSON.parse(resultado.response);
                document.getElementById("inputRua").value = endereco.street;
                document.getElementById("inputCity").value = endereco.city;
            } else if(resultado.status === 484){
                alert("CEP inválido")
            } else{
                alert("Erro da requisição");
            }
        }
    }

}

window.onload = function(){
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep);
}