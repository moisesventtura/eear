function vetor(valores){
    var menor = valores[0]
    for(var i = 0 ; i < valores.length ; i++){
        if(valores[i] < menor){
            menor = valores[i]
        }
    }
        return menor
}

console.log(vetor([10,15,4,90]))