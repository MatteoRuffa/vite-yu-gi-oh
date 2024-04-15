<template>
    <div>
        <h2 class="text-center">Total cards: {{  store && store.data ? store.data.length : 0 }}</h2>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CounterComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>