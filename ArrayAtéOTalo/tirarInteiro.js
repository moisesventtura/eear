function numInteiro(num){
    var r 
     r = ((num - num % 10) / 10) +num % 10 
    return r
}
    console.log(numInteiro(29))