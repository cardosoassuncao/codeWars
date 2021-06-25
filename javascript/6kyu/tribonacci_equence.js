function tribonacci(signature, n) {
    if (n === 0) return []
    if (n === 1) return signature.slice(0, 1)
    if (n === 2) return signature.slice(0, 2)
    if (n === 3) return signature.slice(0, 3)
    const trbnc = signature.slice()

    for (let i = 4; i <= n; i++) {
        trbnc[i - 1] = trbnc[i - 4] + trbnc[i - 3] + trbnc[i - 2]
    }
    return trbnc
}