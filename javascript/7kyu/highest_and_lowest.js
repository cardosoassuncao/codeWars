function highAndLow(numbers) {
    const highest = Math.max(...numbers.split(" "))
    const lowest = Math.min(...numbers.split(" "))
    return `${highest} ${lowest}`
}