<template>
  <HeaderComponent />
  <MainComponent @statusSearch="setParams"/>
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
        archetypeList: [],
      }
    },
    methods: {
      setParams() {
        if (this.store.statusFilter) {
          this.store.options.params.archetype = this.store.statusFilter;
        } else {
          delete this.store.options.params.archetype;
        } this.getYuGiOhCards();
      },
      getYuGiOhArchetypes() {
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res) => {
          this.store.archetype = res.data.slice(0, 10);
          console.log(res.data.slice(0, 10));
          // console.log(res.data.data);
        }).catch((error) => {
           console.log(error);
        }).finally(() => {
          // console.log('finally');
        })
      },
      getYuGiOhCards() {
        this.store.loading = true;
        const loadTime = 3000; 
        const startTime = Date.now();
        axios.get(this.store.apiUrl + this.store.endPoint.cardInfo, this.store.options).then((res) => {
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
            // console.log('finally');
          }, remainingTime);
        })
      },
      
    },
    created() {
      this.getYuGiOhCards();
      this.getYuGiOhArchetypes();
    },
  }
</script>

<style lang="scss" scoped>

</style>