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

        }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {

            //API PER GENERARE INDIRIZZI EMAIL RANDOMICI
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

                //GET RANDOM EMAIL DALL'API .then .push() IN rndEmails
                .then(response => {
                    this.rndEmails.push(response.data.response);
                });

        }

    },

    methods: {

    }

}).mount('#app')