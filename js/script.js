var output = document.getElementById('out');
var num = 0;
var cognomi =["Musazzi", "ginnini", "conte", "Perda", "Ruffini", "Mastella"]
var mioCognome = prompt("Inserisci il tuo cognome");
cognomi.push(mioCognome);
var upper = "";
var cognome = "";








for (var i = 0; i <=cognomi.length; i++) {
    cognome=cognomi[i];
    var tmp=cognome.toLocaleUpperCase();
    cognomi[i] = tmp;
}

output.innerHTML +=  cognome;
cognomi.sort();
cognomi.indexOf("mioCognome")








