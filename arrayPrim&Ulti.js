function primEulti(arr){
    let primeiro = arr.shift();
    let ultimo = arr.pop();

    return [primeiro, ultimo]
}

console.log(primEulti([7, 14, "olá"]))
console.log(primEulti([-100, "aplicativo", 16]))