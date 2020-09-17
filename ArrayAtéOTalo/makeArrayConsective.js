

function makeArrayConsecutive2(statues) {

    var tam = statues.length

  var intervalo = maiorValor(statues) - menorValor(statues) - tam + 1
    console.log(intervalo)
}
  function maiorValor(statues){
    var maiorV=statues[0]
      for (var i=0;i<statues.length;i++){
        maiorV = maiorV < statues[i]? statues[i]:maiorV
    }
  
  return maiorV
}
function menorValor(statues){
  var menorV=statues[0]
  for (i=0;i<statues.length;i++){
        menorV = menorV > statues[i]? statues[i]:menorV
    }
  
  return menorV
}

console.log("Maior: " + maiorValor([6,2,3,8])) 
console.log("Menor: " + menorValor([6,2,3,8])) 
makeArrayConsecutive2 ([6,2,3,8])

