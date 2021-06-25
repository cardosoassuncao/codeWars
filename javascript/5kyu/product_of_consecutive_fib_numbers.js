function productFib(prod) {
    const fibonacci = [0, 1]
    let product = 0
    let n
    for (n = 2; product <= prod; n++) {
        product = fibonacci[n - 1] * fibonacci[n - 2]
        if (product === prod) {
            return [fibonacci[n - 2], fibonacci[n - 1], true]
        }
        fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    }
    return [fibonacci[n - 3], fibonacci[n - 2], false]
}