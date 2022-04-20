//fonction qui compte le nombre de lettres passées en argument.  Si tout autre chose et passé en argument renvoyer 0. Interdiction d'utiliser l'attribut length.
export const my_size_alpha = (str) => {
    let count = 0;
    if(str && typeof str === "string"){
        while(str[count]) {
            count++;
        }
    }
    return count;
};
