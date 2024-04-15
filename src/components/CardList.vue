<template>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in store.data" :key="card.id">
                <CardComponent :id="card.id" :image="card.image" :name="card.name" :archetype="card.archetype"/>
            </div>
        </div>
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
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

</style>