<template>
    <div>
        <h2>장바구니</h2>
        <ul>
            <li>후라이드 : 10000원</li>
            <li>양념 : 11000원</li>
        </ul>
        <h3>총 : 21000원</h3>
    </div>
</template>

<script lang="ts" setup>
interface IBasketListProps {
    items: Array<any>;
}

const props = defineProps<IBasketListProps>();

console.log('props : ', props);
</script>
