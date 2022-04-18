function posicaoFibo(num) {
    if (num === 0) return 0
    if (num === 1) return 1
    return posicaoFibo(num - 2) + posicaoFibo(num - 1)
}

function sequenciaFibo(inicio, parada) {
    console.log(posicaoFibo(inicio))
    if (inicio === parada) return 0
    else return sequenciaFibo(inicio + 1, parada)
}
console.log(posicaoFibo(9))
sequenciaFibo(0, 9)