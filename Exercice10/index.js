function printNumbers(n) {
    let numbers = "";
    for (let i = 1; i <= n; i++) {
        numbers += i ;
        if (i < n) {
            numbers += " ";
        }
    }
    return numbers;
}
console.log(printNumbers(5));

export default printNumbers
