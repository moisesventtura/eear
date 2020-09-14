function vetor(valores){ //Procurar o menor ou maior do VETOR
   var menor = valores[0] // AQUI MENOR JA TERÁ O VALOR DO ARRAY NA POSIÇÃO 0 QUE É 32
   for(var i = 0; i < valores.length ; i++){ // VALORES.LENGTH = TAMANHO / 
    if(valores[i] > menor){
        menor = valores[i]
        }
    }
    return menor
}

console.log("O menor valor do vetor é: " + vetor([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]))