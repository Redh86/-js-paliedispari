
// function palindtrome(wrds) {
//     var lowRegStr = wrds.toLowerCase();
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     if (reverseStr === lowRegStr) {
//         return true
//     }
//     return false
// }


// prl = prompt("Inserisci una parola")
// if (palindtrome(prl)){
//     alert("la parola è palindroma")
// } else {
//     alert("la parola non è palindroma")
// }





function button(){
    var nbr = parseInt(document.getElementById("num").value);
    var parDis = document.getElementsByName('scelta').value;
    console.log(nbr);
    console.log(parDis); 
    var somma = nbr + Math.floor(Math.random()*10 - 5);
    console.log(somma);
}

if (somma % 3 == 0 && document.getElementById('dispari').value) {
    alert("Hai vinto")
}