<template>
    <main>
        <div class="container">
            <CounterComponent />
            <CardList />
        </div>
    </main>
</template>

<script>
import {store} from '../store.js';
import CounterComponent from './CounterComponent.vue';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CounterComponent,
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
    background-image: url('/public/images/OIG2.jpg');
    background-repeat: repeat;
    background-size: contain;
    padding: 30px;
    
    .container {
    background-color: $bg-light;
    border-radius: 5px;
    padding: 15px 30px;

    }
}

</style>