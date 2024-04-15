<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      getYuGiOhCards() {
        axios.get(this.store.apiUrl).then((res) => {
          this.store.data = res.data.data.map(card => ({
            id: card.id,
            image: card.card_images[0].image_url,
            name: card.name,
            archetype: card.archetype ? card.archetype : 'Archetipo non disponibile',
          }));
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finally');
        })
      }
    },
    created() {
      this.getYuGiOhCards();
    },
  }
</script>

<style lang="scss" scoped>

</style>