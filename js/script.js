var output = document.getElementById('out');
var cognomi =["Musazzi", "giannini", "conte", "Perda", "Ruffini", "Mastella"]
var mioCognome = prompt("Inserisci il tuo cognome");
cognomi.push(mioCognome);


for (var i = 0; i <cognomi.length; i++) {
    cognome=cognomi[i];
    var tmp=cognome.toLocaleUpperCase();
    cognomi[i] = tmp;
}

cognomi.sort();

for (var i = 0; i <cognomi.length; i++) {
    output.innerHTML +=  cognomi[i] + "<br>";
}

mioCognome = mioCognome.toLocaleUpperCase();
output.innerHTML += mioCognome;
output.innerHTML += "La posizione del tuo cognome è : "+(cognomi.indexOf(mioCognome)+1);

// Soluzione alternativa con la sola iniziale maiuscola.

// for (var i = 1; i <cognomi.length; i++) {
//     cognomi[i]=cognomi[i].charAt(0).toUpperCase() + cognomi[i].slice(1); //imposto igni iniziale come una maiuscola
// }

// mioCognome = mioCognome.charAt(0).toUpperCase() + cognomi[i].slice(1);