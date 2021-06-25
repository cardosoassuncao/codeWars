function findShort(s) {
    const words = s.split(" ")
    let aux = 1000
    words.forEach(word => {
        let length = word.length
        if (aux >= length) {
            aux = length
        }
    });
    return aux
}