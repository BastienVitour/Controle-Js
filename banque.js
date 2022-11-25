let button = document.querySelector('#button');
let account = document.querySelector('#compte');
let sum = document.querySelector('#somme');

button.addEventListener('click', getInfos)

// Ce qui se passe quand on envoie le formulaire
function getInfos() {

    //On récupère le nom du compte
    let accountNum = account.value
    account.value = ""
    console.log(accountNum);

    //On récupère la somme sélectionnée
    let sumVal = sum.value;
    sum.value = "";
    console.log(sumVal);

    //alert('La somme de', sum, 'a bien été déposée')
    
}