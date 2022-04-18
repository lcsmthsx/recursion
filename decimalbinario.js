function decimalBinario(numero) {
    if (numero == 0) return 0
    else return numero % 2 + 10 * decimalBinario(parseInt(numero / 2))
}
console.log(decimalBinario(10))