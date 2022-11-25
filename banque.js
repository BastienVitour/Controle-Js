let button = document.querySelector('#button');
let account = document.querySelector('#compte');
let sum = document.querySelector('#somme');

button.addEventListener('click', getInfos)

account.addEventListener('input', background)

let valid = true;
let error = 'none';

// Ce qui se passe quand on envoie le formulaire
function getInfos() {

    error = 'none';
    valid = true;

    //On récupère le nom du compte
    let accountNum = account.value

    //On vérifie la validité du compte
    if (accountNum.length === 16) {
        if (valid) {
            account.value = "";
            console.log(accountNum);
        }
    }
    else {
        error = 'compte'
        valid = false;
    }

    //On récupère la somme sélectionnée
    let sumVal = sum.value;

    //On vérifie la validité de la somme entrée
    if (isNaN(sumVal)) {
        valid = false;
        error = 'somme'
    }
    else {
        if (sumVal <= 0) {
            valid = false;
            error = 'somme'
        }
        else {
            if (valid) {
                sum.value = "";
                console.log(sumVal);
            }
            
        }
    }

    //Envoi de l'alerte de confirmation
    if (valid) {
        alert('La somme de '+sumVal+' a bien été déposée')
    }
    else {
        alert('Erreur sur le champ '+error)
    }
        
}

//On vérifie la longueur du compte et on change la couleur de fond en conséquence
function background () {
    let accountNum = account.value;
    if (accountNum.length === 16) {
        account.style.backgroundColor = "#6eff33";
    }
    else {
        account.style.backgroundColor = "#FFFFFF";
    }
}