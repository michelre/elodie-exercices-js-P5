//je créé la fonction add avec 2 parametres
function add(a, b) {
    //Number convertie a et b en nombre
    return Number(a) + Number(b);
}
//j'appel la fonction
let result1 = add(10, 20);
let result2 = add(30, -40.6);

//j'affiche le resultat
console.log(result1);
console.log(result2);

 export default add;
