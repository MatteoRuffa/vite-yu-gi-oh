<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="name">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ archetype }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['id', 'image', 'name', 'archetype'],
    }
</script>

<style lang="scss" scoped>

</style>