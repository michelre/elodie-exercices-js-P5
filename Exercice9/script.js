function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    }
    if (age < 65) {
        return "Vous êtes majeur.";
    } 
    return "Vous êtes senior.";

    /**
     * Pas besoin de else if / else dans le cas de if avec des returns
     */
}

// Exemples d'utilisation
console.log(checkAge(15));  // Affiche "Vous êtes mineur."
console.log(checkAge(30));  // Affiche "Vous êtes majeur."
console.log(checkAge(75));  // Affiche "Vous êtes senior."


export default checkAge;
