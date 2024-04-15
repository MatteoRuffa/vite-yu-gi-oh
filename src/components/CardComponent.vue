<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="name">
        <div class="card-body">
            <span class="card-title">{{ name }}</span>
            <span></span>
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
@use '../assets/styles/partials/variables' as *;
.card-body {
    background: linear-gradient(to right, #D48F38, darken(#D48F38, 20%));
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .card-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        line-height: 1.2; 
        height: 2.4em; 
        font-size: 1.2rem;
    }
    .card-title span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>