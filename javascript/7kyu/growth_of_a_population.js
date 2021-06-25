function nbYear(p0, percent, aug, p) {
    const population = [p0]
    let year = 0

    for (let n = 1; ; n++) {
        population[n] = Math.floor(population[n - 1] * (1 + percent / 100) + aug)
        if (population[n] >= p) {
            year = n
            break
        }
    }
    return year
}