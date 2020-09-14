function pagar(valorPago, precoProduto){
    var troco = valorPago - precoProduto
    return troco
}

console.log("O troco a ser dado é: R$" + pagar(10,2.50))