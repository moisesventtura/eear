function vetor(a,b){
    var soma = 0
    impar = []
    k = [0]
    for(var i = a ; i < b ; i++ ){
        if(i % 2 !==0){
            impar[k] = i
            soma += i
            k++
        }
    }
        console.log("A soma do números ímpares é: " + soma)
        return impar
}

console.log(vetor(10,20))