let button = document.querySelector('#button');
let account = document.querySelector('#compte');
let sum = document.querySelector('#somme');

button.addEventListener('click', getInfos)

account.addEventListener('input', background)

let valid = true;
let error = 'none';

let accountNum = 0;
let sumVal = sum.value;

let index = 0

// Ce qui se passe quand on envoie le formulaire
function getInfos() {

    error = 'none';
    valid = true;
    account.style.backgroundColor = '#FFFFFF'

    //On récupère le nom du compte
    accountNum = account.value

    //console.log(accountNum)

    //On vérifie la validité du compte
    if (!isNaN(accountNum)) {
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
    }
    else {
        //console.log(Number.isInteger(accountNum))
        error = 'compte';
        valid = false;
    }
    

    //On récupère la somme sélectionnée
    sumVal = sum.value;

    //On vérifie la validité de la somme entrée
    checkNumber(sumVal)

    //Envoi de l'alerte de confirmation
    if (valid) {
        alert('La somme de '+sumVal+' a bien été déposée')
        
        console.log(index)
        addTransaction(index);
        index++
    }
    else {
        //Envoi du message d'erreur
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

function checkNumber(number) {
    if (isNaN(number)) {
        valid = false;
        error = 'somme'
    }
    else {
        if (number <= 0) {
            valid = false;
            error = 'somme'
        }
        else {
            if (valid) {
                sum.value = "";
                console.log(number);
            }
            
        }
    }
}

let transactionList = document.querySelector('#transactions');
let element = document.getElementsByClassName('transaction');
let accounts = document.getElementsByClassName('account');
let sums = document.getElementsByClassName('sum')

function addTransaction(index) {

    const addDiv = document.createElement("div");

    addDiv.classList.add('transaction')

    transactionList.appendChild(addDiv);

    const addAccount = document.createElement("span")

    addAccount.classList.add('account')

    element[index].appendChild(addAccount)

    const addSum = document.createElement("span")

    addSum.classList.add('sum')

    element[index].appendChild(addSum)

    accounts[index].textContent = 'Compte '+accountNum+' ';

    sums[index].textContent = 'a déposé '+sumVal;

}