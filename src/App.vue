<template>
  <HeaderComponent />
  <MainComponent @statusSearch="setParams" @changeNextPage="changeNextPage" @changePreviousPage="changePreviousPage"/>
  
  
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
        const params= {
          num:20,
          offset: this.store.options.params.offset,
        };
        if(this.store.statusFilter) {
          params.archetype = this.store.statusFilter;
        }
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res) => {
          const someTry = [];
          while(someTry.length < 10) {
            const randomIndex = Math.floor(Math.random() * res.data.length);
            if(someTry.indexOf(randomIndex) === -1) someTry.push(randomIndex);
          }
          this.store.archetype = someTry.map(index => res.data[index]);
          console.log(this.store.archetype);
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
      changeNextPage() {
        this.store.options.params.offset += 20;
        if (this.store.statusFilter) {
          this.store.options.params.archetype = this.store.statusFilter;
        }
        this.getYuGiOhCards();
      },
      changePreviousPage() {
        this.store.options.params.offset -= 20;
        if (this.store.statusFilter) {
          this.store.options.params.archetype = this.store.statusFilter;
        }
        this.getYuGiOhCards();
      },
    },
    created() {
      this.getYuGiOhCards();
      this.getYuGiOhArchetypes();
    },
  }
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
}

</style>