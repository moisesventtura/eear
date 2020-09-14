function menores(a,b,c,d){
    if(a<b && a<c && a<d){
        return a
    }
    if(b<c && c<d){
        return b
    }
    if(c<d){
        return c
    }
    return d
}
console.log("O menor valor é: " + menores(4,5,3,2))