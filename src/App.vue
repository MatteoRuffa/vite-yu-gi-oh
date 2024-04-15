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
        this.store.loading = true;
        const loadTime = 3000; 
        const startTime = Date.now();
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
          const endTime = Date.now();
          const elapsedTime = endTime - startTime;
          const remainingTime = Math.max(loadTime - elapsedTime, 0);
          setTimeout(() => {
            this.store.loading = false;
            console.log('finally');
          }, remainingTime);
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