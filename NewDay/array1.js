var projeto = [3,5,8,20,150]
var diferenca = projeto[0]
    for(var pos = 0; pos < projeto.length - 1; pos++ ){
            //console.log(projeto[pos])        
            diferenca = projeto[pos + 1] - projeto[pos]
            console.log('A diferença é: ' + diferenca)

        }