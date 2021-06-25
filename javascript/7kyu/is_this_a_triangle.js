function isTriangle(a, b, c) {
    const c1 = (Math.abs(b - c) < a) && (a < b + c)
    const c2 = (Math.abs(a - c) < b) && (b < a + c)
    const c3 = (Math.abs(a - b) < c) && (c < a + b)
    if (c1 && c2 && c3) return true
    return false
}