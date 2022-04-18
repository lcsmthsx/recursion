function contadorParV2(num, contador) {
    if (num < 2) return console.log(contador)
    if (num % 2 == 0) {
        num -= 2
        contador++
        contadorParV2(num, contador)
    }
    else contadorParV2(num - 1, contador)
}
contadorParV2(13, 0)
