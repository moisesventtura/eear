function makeArrayConsecutive(vetor){
    var tamanho = vetor.length
    var consecutivosFaltantes = maiorValor(vetor) - menorValor(vetor) - tamanho + 1
    console.log("O total de números faltantes são: " + consecutivosFaltantes)
}

function maiorValor(vetor){
    var maior = vetor[0]
    for(var i = 0 ; i < vetor.length ; i++){
        maior = maior < vetor[i] ? vetor[i] : maior
    }
    return maior
}

function menorValor(vetor){
    var menor = vetor[0]
    for(i = 0 ; i < vetor.length ; i++){
        menor = menor > vetor[i] ? vetor[i] : menor
    }
    return menor
}
makeArrayConsecutive([6,2,3,8,10,50])
console.log("O Maior valor do array é: " + maiorValor([6,2,3,8,10,50]))
console.log("O menor valor do Array é: " + menorValor([6,2,3,8,10,50]))