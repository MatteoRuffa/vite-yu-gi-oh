<template>
    <main>
        <div class="container">
            <div>
                <select name="" id="" @change="$emit('statusSearch')" v-model="store.statusFilter">
                    <option value="">All</option>
                    <option  :value="archetype.archetype_name" v-for="archetype in store.archetype" :key="archetype.archetype_name">{{ archetype.archetype_name}}</option>
                </select>
                <CounterComponent :cards="filteredCards"/>
            </div>
            <CardList />
            <div>
                <button type="button" class="btn btn-warning" @click="$emit('changePreviousPage')">Previous page</button>
                <button type="button" class="btn btn-warning" @click="$emit('changeNextPage')">Next page</button>
            </div>
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
        },
        computed: {
            filteredCards() {
                if (this.store.statusFilter) {
                    return this.store.data.filter(card => card.archetype === this.store.statusFilter);
                } else {
                    return this.store.data;
                }
            }
        },
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
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    }
}

</style>