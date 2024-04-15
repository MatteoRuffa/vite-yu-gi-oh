<template>
    <header class="d-flex justify-content-center align-items-center ">
        <div>
            <img src="/public/images/yugioh_logo-header-470x190-2599784206.jpg" alt="">
        </div>
        <h1 class="text-center">Yu-Gi-Oh Api</h1>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    div img {
        width: 150px;
        padding: 20px;
    }
    h1 {
        color: $darktext;
    }
</style>