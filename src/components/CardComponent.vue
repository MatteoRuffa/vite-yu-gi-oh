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
.card {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card-body {
    // background: linear-gradient(to right, #D48F38, transparent);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .card-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        line-height: 1.2; 
        height: 2.4em; 
        font-size: 1.2rem;
        font-weight: 500;
    }
    .card-title span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .card-text {
        display: flex;
        justify-content: center;
        font-weight: 400;
    }
}
</style>