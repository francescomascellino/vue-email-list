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

            listFull: false,

        }
    },

    //I LIFEHOOKS POSSONO ESSERE ASINCRONI
    async mounted() {

        for (let i = 0; i < 10; i++) {

            //API PER GENERARE INDIRIZZI EMAIL RANDOMICI
            //PRIMA DI PROCEDERE ASPETTA CHE TUTTE LE CHIAMATE DI azios VENGANO COMPIUTE
            await axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

                //GET RANDOM EMAIL DALL'API .then .push() IN rndEmails
                .then(response => {
                    this.rndEmails.push(response.data.response);
                });

        };

        // SOLO DOPO listFull DIVENTA TRUE (LA LISTA E' PIENA PERCHE' HA FATTO DIECI GIRI DEL FOR LOOP)
        this.listFull = true;


    },

    methods: {

    }

}).mount('#app')