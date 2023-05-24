<template>
    <div class="">
        <p>count1: {{count}}</p>
        <button @click="count++">add</button>
    </div>
</template>
<script>
export default {
    name: 'child1',
    data() {
        return {
            count: 0,
        }
    },
    mounted() {
        let count = 0;
        
    },
    destoryed() {
        console.log('child1 destoryed');
    },
    activated() {
        console.log('child1 activated');
    },
    deactivated() {
        console.log('child1 deactivated');
    }
}
</script>