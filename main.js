console.log('connesso');

/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Never Gonna Give You Up',
        image: 'https://i.pinimg.com/originals/89/5c/e7/895ce751ba0379700381d17a67086931.gif'
      }
    }
  }).mount('#app')