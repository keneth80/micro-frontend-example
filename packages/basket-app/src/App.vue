<template>
    <basket-list :items="items"></basket-list>
</template>
<script lang="ts" setup>
import {reactive} from 'vue';
import BasketList from './components/BasketList.vue';

const items = reactive([
    {name: '후라이드', price: 10000},
    {name: '양념', price: 11000},
    {name: '반반', price: 11000}
]);
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
