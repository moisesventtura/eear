function vetor(a,b){
    var soma = 0
    par = []
    k = [0]
    for(var i = a ; i < b ; i++ ){
        if(i % 2 !==0){
            par[k] = i
            soma += i
            k++
        }
    }
        console.log("A soma dos números ímpares é: " + soma)
        return par
}

console.log(vetor(10,20))