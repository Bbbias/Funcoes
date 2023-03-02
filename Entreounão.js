function entre(num, min, max, inc){
    return inc ? (num >= min && num <= max) : (num > min && num < max) 
}

console.log(entre(60, 50, 100))
console.log(entre(16, 100, 160))
console.log(entre(3, 3, 150))
console.log(entre(3, 3, 150, true))