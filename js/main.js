
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





function button(res){
    var nbr = parseInt(document.getElementById("num").value);
    var parDis = document.getElementsByName('scelta');
    console.log(nbr);
    console.log(parDis); 
    var res = nbr + Math.floor(Math.random()*5);
    console.log(res);
    if (res % 3 == 0 && document.getElementById('dispari').value) {
        alert("Hai vinto")
    } else if (res % 2 == 0 && document.getElementById('pari').value){
        alert("Hai vinto")
    } else if (res % 2 == 0 && document.getElementById('dispari').value){
        alert("Hai perso")
    } else {
        alert("Hai perso")   
    }
    return res
}
    





