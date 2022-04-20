//fonction qui retourne toutes les lettres de l’alphabet en minuscule sur une seule ligne, dans l’ordre croissant à partir de la lettre ’a’ jusqu'à 'z'.
export const my_display_alpha = () => {
    let alphabet = "";
    for (let i = 97; i <= 122; i++) {
        alphabet += String.fromCharCode(i);
    }
    return alphabet;
}


