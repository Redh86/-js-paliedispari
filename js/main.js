
function palindtrome(wrds) {
    var lowRegStr = wrds.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        return true
    }
    return false
}


prl = prompt("Inserisci una parola")
if (palindtrome(prl)){
    alert("la parola è palindroma")
} else {
    alert("la parola non è palindroma")
}
