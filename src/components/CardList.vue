<template>
        <div class="row" v-if="!store.loading">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="card in store.data" :key="card.id">
                <CardComponent :id="card.id" :image="card.image" :name="card.name" :archetype="card.archetype"/>
            </div>
        </div>
        <div v-else><ApiLoader /></div>
        
</template>

<script>
import {store} from '../store.js';
import ApiLoader from './ApiLoader.vue';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            ApiLoader,
            CardComponent,
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .col-12, .col-md-6, .col-lg-4 .col-xl-3 {
        padding: 15px;
    }
</style>