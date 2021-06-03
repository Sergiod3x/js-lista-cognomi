var output = document.getElementById('out');
var cognomi =["Musazzi", "ginnini", "conte", "Perda", "Ruffini", "Mastella"]
var mioCognome = prompt("Inserisci il tuo cognome");
cognomi.push(mioCognome);

for (var i = 0; i <=cognomi.length; i++) {
    cognome=cognomi[i];
    var tmp=cognome.toLocaleUpperCase();
    cognomi[i] = tmp;
    output.innerHTML +=  cognomi[i] + "<br>";
}

cognomi.sort();

for (var i = 0; i <=cognomi.length; i++) {
    output.innerHTML +=  cognomi[i] + "<br>";
}

mioCognome = mioCognome.toLocaleUpperCase();

output.innerHTML +=(cognomi.indexOf("mioCognome")+1);



