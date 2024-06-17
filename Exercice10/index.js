/*function printNumbers(n) {
    let numbers = "";
    for (let i = 1; i <= n; i++) {
        numbers += i ;
        if (i < n) {
            numbers += " ";
        }
    }
    return numbers;
}*/


/**
 *  Autre façon d'écrire la fonction printNumbers. On se ramène à un tableau d'élément avec Array.from et 
 *  on en crée une chaîne avec la fonction join
 *
 */
function printNumbers(n) {Array.from({length: n})
    return Array.from({length: n}, (e, idx) => idx + 1).join(' ');

}

console.log(printNumbers(5));

export default printNumbers
