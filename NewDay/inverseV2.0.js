function valoresInteiros(valores){
    var t = []
    for(var i = 0 ; i < valores.length ; i++ ){
        t[i] = valores[(valores.length - 1) - i ] //INVERSÃO
    }
    return t    
}
    console.log(valoresInteiros([1,2,3,4]))