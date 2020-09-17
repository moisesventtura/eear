function saqueImposto(saque, saldo){
    const imposto = 0.01
    saldo = saque > (saldo / 2) ? (saldo - saldo * imposto) - saque : saldo - saque
    console.log(saldo)
}

    console.log(saqueImposto(260, 500))