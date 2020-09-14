function vetor(valores){
    //var menor = valores[0]
    var k = 0
    var par = []
    for(var i = 0 ; i < valores.length ; i++){
        if(valores[i] % 2 !== 0 ){
            par[k] = valores[i]
            k++
        }
    }
        return par
}
    console.log(vetor([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]))