<template>
    <div class="">
        <p>count2: {{count}}</p>
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
    activated() {
        console.log('child2 activated');
    },
    deactivated() {
        console.log('child2 deactivated');
    }
}
</script>