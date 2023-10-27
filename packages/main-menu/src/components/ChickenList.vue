<template>
    <div>
        <h2>메뉴</h2>
        <h3>치킨</h3>
        <ul>
            <li v-for="(menu, index) in menus" :key="index">
                {{ menu.name }} : {{ menu.price }}원
                <button>담기</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
interface IChickenListProps {
    menus: Array<any>;
}

const props = defineProps<IChickenListProps>();

console.log('props : ', props);
</script>
