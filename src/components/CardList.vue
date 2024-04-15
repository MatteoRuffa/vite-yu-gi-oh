<template>
    <div class="container">
        <CardComponent/>
    </div>
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            CardComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>