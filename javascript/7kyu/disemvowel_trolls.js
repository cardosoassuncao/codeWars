function disemvowel(str) {
    const s = [...str]
    const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',]
    return s.filter(l => !v.includes(l)).join('')
}