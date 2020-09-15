function imparesN(n){
    var impar = []
    var soma = 0
    var k = 0
    for(var i = 0 ; i < n.length ; i++){
        if(n[i] %  2 != 0){
            impar[k] = n[i]
            soma += n[i] // SOMANDO OS IMPARES QUE ACHOU
            k++
        }    
    }
    console.log(soma)    
    return impar
}

console.log(imparesN([1,4,5,8]))