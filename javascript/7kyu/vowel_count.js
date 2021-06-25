function getCount(str) {
    var vowelsCount = 0;
    const arr = [...str.toLowerCase()]
    const vowels = ['a', 'e', 'i', 'o', 'u']
    arr.forEach(char => {
        if (vowels.includes(char)) {
            vowelsCount += 1
        }
    })
    return vowelsCount;
}