function inverterPalavra(palavra){
    var palavraInv = ""
    for(var i = 0; i<palavra.length; i++){
        palavraInv += palavra[(palavra.length -1 ) -i]
    }
        return palavra === palavraInv ? true:false
}
    console.log("É um palíndromo? " + inverterPalavra("asa"))