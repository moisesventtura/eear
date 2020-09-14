function nadador(idade){
    if(idade >= 5 && idade <= 7){
        return "Infantil A"
    }
    if(idade >= 8 && idade <= 10){
        return "Infantil B"
    }
    if(idade >= 11 && idade <= 13){
        return "Juvenil  A"
    }
    if(idade >= 14 && idade <= 17){
        return "Juvenil B"
    }
    if(idade >= 18 ){
        return "Adulto"
    }
}

console.log(nadador(5))