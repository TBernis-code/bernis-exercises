//fonction qui affiche POSITIF ou NEGATIF en fonction de l'entier passé en argument.  Si nbr est négatif alors afficher NEGATIF. Si nbr est positif ou null ou undefined alors afficher POSITIF.
export const my_is_posi_neg = (nbr) => {
    if(nbr < 0) {
        return "NEGATIF";
    } else {
        return "POSITIF";
    } 
}

