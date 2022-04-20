//fonction qui compte le nombre d’élement contenu dans un tableau passé en paramètre.
export const my_length_array = (arr) => {
    let count = 0;
    while(arr && arr[count]) {
        count++;
    }
    return count;
}

