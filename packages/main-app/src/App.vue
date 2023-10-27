<template>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <div id="root">
        <div>
            <div style="border: solid; border-color: red; width: 700px">
                <h1>Header</h1>
            </div>
        </div>

        <div style="display: flex; height: 300px">
            <div class="menu">
                menu
                <chicken-list :menus="menus" />
            </div>
            <div class="basket">
                basket
                <basket-list />
            </div>
        </div>
        <div ref="reactArea" class="footer"></div>
    </div>
</template>
<script>
import {defineComponent, defineAsyncComponent, reactive, onMounted, ref} from 'vue';
import * as React from 'react';
import {createRoot} from 'react-dom/client';

// import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        ChickenList: defineAsyncComponent(() => import('menu/ChickenList')),
        BasketList: defineAsyncComponent(() => import('basket/BasketList'))
    },
    setup() {
        const reactArea = ref(null);
        onMounted(() => {
            const container = document.getElementById('root');
            console.log('container : ', container);
            const root = createRoot(reactArea.value);
            root.render('React Component Loading...');
            try {
                import('footer/FooterComponent').then((mod) => {
                    root.render(React.createElement(mod.default));
                });
            } catch (error) {
                console.log('react component loading error : ', error);
            }
        });
        const menus = reactive([
            {name: '후라이드', price: 10000},
            {name: '양념', price: 11000},
            {name: '반반', price: 11000}
        ]);
        return {
            reactArea,
            menus
        };
    }
});
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

.menu {
    border: solid;
    border-color: green;
    width: 500px;
    height: 100%;
}
.basket {
    border: solid;
    border-color: blue;
    width: 200px;
    height: 100%;
}
.footer {
    border: solid;
    border-color: gray;
    width: 500px;
}
</style>
