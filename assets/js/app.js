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

            rndEmails: [],

        }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {

            //API PER GENERARE INDIRIZZI EMAIL RANDOMICI
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

                .then(response => {
                    console.log(response.data.response);
                });

        }

    },

    methods: {

    }

}).mount('#app')