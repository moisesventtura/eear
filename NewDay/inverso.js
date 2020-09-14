    function valoresInteiros(valores){
        //var valores = [1,2,3,4,5,6,7,8,9,10]
        var t = []    
            for(var i = 0 ; i < valores.length ; i++){
                t[i] = valores[(valores.length - 1) - i]  
    }
        return t
}
    console.log(valoresInteiros([1,2,3,4,5,6,7,8,9,10]))
