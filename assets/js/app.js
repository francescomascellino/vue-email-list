/* Esercizio di oggi: Vue Email List
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp({
    data() {
        return {

            // ARRAY DELLE EMAIL GENERATE
            rndEmails: [],

            // UTILIZZATA PER DAL LIFEHOOK ASINCRONO:
            // listFull: false,

        }
    },

    mounted() {

        //SOSTITUENDO IL 10 IN app.js e in index.html CON UNA VARIABILE DEFINITA DALL'UTENTE SARA' POSSIBILE GENERARE UN NUMERO PERSONALIZZATO DI EMAIL
        for (let i = 0; i < 10; i++) {

            //API PER GENERARE INDIRIZZI EMAIL RANDOMICI
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

                //GET RANDOM EMAIL DALL'API .then .push() IN rndEmails
                .then(response => {
                    this.rndEmails.push(response.data.response);
                });

        };

    },

    //ALTERNATIVA CON LIFEHOOK ASINCRONO

    /* async mounted() è una sintassi che indica che il metodo mounted() è una funzione asincrona. Le funzioni asincrone in JavaScript consentono di scrivere codice che può attendere il completamento di operazioni asincrone, come richieste HTTP o operazioni di I/O, senza bloccare l'esecuzione del thread principale. */

    /* Utilizzo: Quando si definisce async mounted(), è possibile utilizzare l'operatore await all'interno del metodo per attendere il completamento di una promessa o di un'altra funzione asincrona prima di eseguire il resto del codice nel metodo mounted(). Ciò può essere utile quando si effettuano chiamate API o si eseguono operazioni asincrone per ottenere dati da utilizzare nel componente. */

    /*     async mounted() {
    
            for (let i = 0; i < 10; i++) {
    
                await axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    
                    .then(response => {
                        this.rndEmails.push(response.data.response);
                    });
    
            };
    
            this.listFull = true;
    
    
        }, */

    methods: {

    }

}).mount('#app')