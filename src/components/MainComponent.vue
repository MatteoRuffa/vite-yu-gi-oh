<template>
    <main>
        <div class="container">
            <CardList />PROVA
        </div>
    </main>
</template>

<script>
import {store} from '../store.js';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main {
    background-color: $bg-primary;
    .container {
    background-color: $bg-light;
    }
}

</style>