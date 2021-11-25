// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo 
// oggetto studente inserendo nell’ordine: nome, cognome e età.

// Parte 1
const singleStudent = {
    name : 'Sebastian',
    lastName : 'Carai',
    age : 19
}
for (key in singleStudent){
    console.log('Parte 1: ' + singleStudent[key]);
}

// Parte 2
const students =[
    {
        name : 'Mario',
        lastName : 'Rossi',
        age : 18
    },
    {
        name : 'Luca',
        lastName : 'Bianchi',
        age : 17
    }
]
students.push(singleStudent);
for (let i=0; i<students.length; i++){
    for (key in students [i]){
        if (key !== 'eta'){
            console.log(`Parte 2: ${key}${i + 1} - ${students[i][key]}`);
        }
    }
}

// Parte 3
const newName = prompt('inserisci il nome dello studente');
const newLastName = prompt('inserisci il cognome dello studente');
const newAge = parseInt(prompt('inserisci l\'età dello studente'));

const newStudent = {
    name : newName,
    lastName : newLastName,
    age : newAge
}
students.push(newStudent);
for (let i=0; i< students.length; i++){
    for (key in students[i]){
        console.log(`Parte 3: ${key}${i+1} - ${students[i][key]}`)
    }
}