function triangulo(a,b,c){
    if(a==b && b==c && a==c){
        return "Equilátero"
    }
    if (a==b || b==c){
        return "Isósceles"
    }
    return "Escaleno"
}

console.log("O triângulo é " + triangulo(3,2,4))