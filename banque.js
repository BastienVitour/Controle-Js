let button = document.querySelector('#button');
let account = document.querySelector('#compte');
let sum = document.querySelector('#somme');

button.addEventListener('click', getInfos)

account.addEventListener('input', background)

let valid = true;

// Ce qui se passe quand on envoie le formulaire
function getInfos() {

    //On récupère le nom du compte
    let accountNum = account.value

    //On vérifie la validité du compte
    if (accountNum.length === 16) {
        account.value = "";
        console.log(accountNum);
    }
    else {
        alert('Pas la bonne longueur')
        valid = false;
    }

    //On récupère la somme sélectionnée
    let sumVal = sum.value;

    //On vérifie la validité de la somme entrée
    if (isNaN(sumVal)) {
        //alert('Entrez un nombre svp')
        valid = false;
    }
    else {
        if (sumVal <= 0) {
            //console.log('Veuillez entrer un nombre valide')
            valid = false;
        }
        else {
            sum.value = "";
            console.log(sumVal);
        }
    }

    if (valid) {
        alert('La somme de '+sumVal+' a bien été déposée')
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