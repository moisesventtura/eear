function param(a,b){
    var vetor = []
    var soma = 0
    var k = 0
    for(var i = a ; i < b ; i++){
        if(i % 2 != 0){
            vetor[k] = i
            k++
            soma += i
        }    
    }    
    console.log(soma)    
    return (vetor)
}

console.log(param(1,10))