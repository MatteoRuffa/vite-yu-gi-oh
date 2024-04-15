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
        store
      }
    },
    methods: {
      getYuGiOhCards() {
        axios.get(this.store.apiUrl + this.store.endPoint).then((res) => {
          this.store = res.data.data;
          console.log(res.data.data);
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