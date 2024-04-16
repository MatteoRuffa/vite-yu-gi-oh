<template>
    <div>
        <span><h2 class="">Total cards: {{  cards ? cards.length : 'Caricamento...' }}</h2></span>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CounterComponent',
        props: ['cards'],
        data() {
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div {
    padding: 10px;
    h2 {
        background-color: $darktext;
        color: $lighttext;
        border-radius: 10px;
        box-shadow: 5px 5px 10px $darktext;
        padding: 10px;
    }
}
</style>