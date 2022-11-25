let button = document.querySelector('#button');
let account = document.querySelector('#compte');
let sum = document.querySelector('#somme');

button.addEventListener('click', getInfos)

account.addEventListener('input', background)



// Ce qui se passe quand on envoie le formulaire
function getInfos() {

    //On récupère le nom du compte
    accountNum = account.value

    //On vérifie la validité du compte
    if (accountNum.length === 16) {
        account.value = ""
        console.log(accountNum);
    }
    else {
        alert('Pas la bonne longueur')
    }

    //On récupère la somme sélectionnée
    let sumVal = sum.value;

    //On vérifie la validité de la somme entrée
    if (isNaN(sumVal)) {
        console.log('Entrez un nombre svp')
    }
    else {
        if (sumVal <= 0) {
            console.log('Veuillez entrer un nombre valide')
        }
        else {
            sum.value = "";
            console.log(sumVal);
        }
    }
    
    

    //alert('La somme de', sum, 'a bien été déposée')
    
}

function background () {
    let accountNum = account.value;
    if (accountNum.length === 16) {
        account.style.backgroundColor = "#6eff33";
    }
    else {
        account.style.backgroundColor = "#FFFFFF";
    }
}