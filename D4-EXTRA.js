// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom (n)
{
    const arrayCasuale = [];
    for (let i=0; i<n; i++)
    {
        arrayCasuale[i]=Math.floor(Math.random()*10);
    }
    return arrayCasuale;
}


function checkArray(arrayACaso)
{
    let sommaCinque = 0;
    for(let i=0; i<arrayACaso.length; i++)
    {
        if(arrayACaso[i] > 5)
        {
            console.log("Extra.1: Il numero", arrayACaso[i], "è maggiore di 5");
            sommaCinque+= arrayACaso[i];
        }
    }
    return sommaCinque;

}


console.log("Extra.1: La somma dei numeri maggiori di 5 è:",checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
    {
        name : "bermuda",
        id : 1007,
        price : 5,
        quantity : 2
    },
    {
        name : "calzini",
        id : 1008,
        price : 10,
        quantity : 5
    },
    {
        name : "scarpe",
        id : 1009,
        price : 50,
        quantity : 1
    },
    {
        name : "cappello",
        id : 1010,
        price : 15,
        quantity : 1
    }
]

function shoppingCartTotal (shoppingCart)
{
    let totale = 0;
    for (let i=0; i<shoppingCart.length; i++)
    {
        totale += (shoppingCart[i].price * shoppingCart[i].quantity);
    }
    return totale;
}

console.log("Extra.2 Il totale è:",shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const jeans = {
    name : "jeans",
    id : 1011,
    price : 35,
    quantity : 1
}


function addToShoppingCart (newObj)
{
    shoppingCart.push(newObj);
    return shoppingCart.length;
}

console.log("Extra.3 Nuova lunghezza Array Shopping Cart:",addToShoppingCart(jeans))
// console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart (array)
{
    let oggettoCostoso= 0;
    let nomeOggettoCostoso;
    for (let i=0; i<array.length; i++)
    {
        if(array[i].price >= oggettoCostoso)
        {
            oggettoCostoso = array[i].price;
            nomeOggettoCostoso = array[i].name;
        }
    }
    return nomeOggettoCostoso;
}

console.log("Extra.4 Il più costoso è:",maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart (array)
{
    const lasestObj = array.pop();
    return lasestObj;
}

console.log("Extra.5 L'ultimo elemento inserito è:",latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

// function loopUntil (number)
// {
//     let count = 0;
//     let numero;
//     do{
//          numero = Math.floor(Math.random()*10);
//          count ++;
//          return numero;
//     }while(numero < number)

    
// }

// console.log("Extra.6", loopUntil());

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
