function towerBuilder(nFloors) {
    const array = []
    for (let n = 0; n < nFloors; n++) {
        array[n] = ''.padStart(nFloors - 1 - n, ' ') + ''.padStart(2 * n + 1, '*') + ''.padStart(nFloors - 1 - n, ' ')
    }
    return array
}