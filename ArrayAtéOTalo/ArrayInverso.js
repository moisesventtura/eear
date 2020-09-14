function inverso(valores){
    var t = []
    for(var i = 0 ; i < valores.length ; i++  ){
            t[i] = valores[(valores.length -1 ) - i]
    }
        return t
}

    console.log(inverso([1,2,3,4,5]))