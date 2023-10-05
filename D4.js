/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function area (l1,l2)
{
    return (l1*l2)/2;
}

console.log("Es.1 Area: ",area(8,2));




/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (num1, num2){

    if(num1 !== num2)
    {
        somma = num1 + num2
    }
    else
    {
        somma = (num1 + num2)*3;
    }
    return somma;
}

console.log("Es.2 La somma è:", crazySum(3,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (numDiff)
{
    if(numDiff > 19)
    {
        diff = (numDiff - 19)*3;
    }
    else 
    {
        diff = 19 - numDiff;
    }

    return diff;
}

console.log("Es.3 La Differenza è:",crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n)
{
    if (n >= 20 && n <= 100 || n === 400)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log("Es. 4 Vero o falso?",boundary(400));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (string)
{
    const checkEpicode = string.slice(0,7);
    if(checkEpicode === "EPICODE")
    {
        return string;
    }
    else
    {
        const stringNuova = "EPICODE ".concat(string);
        return stringNuova;
    }

}

console.log("Es.5 La nuova stringa è:", epify("EPICODE sei tu la migliore"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (num)
{
    if (num % 3 === 0 || num % 7 === 0)
    {
        if(num % 3 === 0)
        {
            return num + " E' multiplo di 3";
        }
        else if(num % 7 === 0)
        {
            return num + " E' multiplo di 7";
        }
    }
    else
    {
        return num + " Non è multiplo nè di 3 nè di 7";
    }
}

console.log("Es.6:",check3and7(25));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (string)
{
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const stringaInvertita = reverseArray.join("");
    return stringaInvertita;
}

console.log("Es.7:",reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst (stringWords)
{
    const splitStringWords = stringWords.split(" ");
    // console.log("Array:",splitStringWords);
    for (let i=0; i<splitStringWords.length; i++)
    {
        splitStringWords[i]=splitStringWords[i].charAt(0).toUpperCase()+splitStringWords[i].substring(1);
    }
    const newString= splitStringWords.join(" ");
    return newString;
}

console.log("Es.8 Nuova Stringa:", upperFirst("ei come va"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (nuovaStringa)
{
    const splitNuovaStringa = nuovaStringa.split("");
    // console.log(splitNuovaStringa);
    splitNuovaStringa.shift();
    splitNuovaStringa.pop();
    const newNuovaStringa = splitNuovaStringa.join("");
    return newNuovaStringa;
}

console.log("Es.9:",cutString("Massimiliano"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
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

console.log("Es.10 Array:",giveMeRandom(7));