//fonction qui renvoie un array de tout les caractères passé en argument.
export const my_array_alpha = (word) => {
    let array = [];
    for (let i = 0; i < word.length; i++) {
        array.push(word[i]);
    }
    return array;
}
