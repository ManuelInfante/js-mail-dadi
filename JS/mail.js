// DATABASE EMAIL

var emailDatabase = ['team@boolean.careers', 'prova@prova.prova', 'invitatospeciale@gmail.com', 'io@io.io', 'invitato@inviti.it' ];
console.log(emailDatabase);

var emailUtente = prompt("Inserisci l'email con cui sei stato invitato");
console.log(emailUtente);

// CHECK

var emailCheck = false;

for (var i = 0; i < emailDatabase.length; i++){
    if (emailDatabase[i] == emailUtente){
        emailCheck = true;
    }
}

if (emailCheck == true){
    document.getElementById('welcomeMessage').innerHTML = 'Benvenuto ' + emailUtente;
} else {
    alert("Email non trovata");

    document.getElementById('welcomeMessage').innerHTML = "Ricarica la pagina ed assicurati di aver inserito la email corretta, grazie.";
}