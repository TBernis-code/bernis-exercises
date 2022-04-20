import my_display_alpha from './exercise-1.js';

//fonction qui retourne toutes les lettres de l’alphabet en minuscule sur une seule ligne, dans l’ordre croissant à partir de la lettre ’z’ jusqu'à 'a'.
export const my_display_alpha_reverse = () => {
    let alphabet = my_display_alpha();
    return reverse(alphabet);
}

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}