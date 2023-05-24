<template>
    <div>
        child
        <p>child count {{ childCount }}</p>
    </div>
</template>
<script>
export default {
    name: 'child',
    inject: ['count'],
    data() {
        return {
            childCount: this.count
        }
    },
    beforeCreated() {
        console.log('child before created');
    },
    created() {
        console.log('child created');
    },
    beforeMounted() {
        console.log('child beforeMounted');
    },
    mounted() {
        console.log('child mounted');
    },
    beforeUpdate() {
        console.log('child before update');
    },
    updated() {
        console.log('child updated');
    },
    beforeUnmount() {
        console.log('child before Ummount');
    },
    unmount() {
        console.log('child before unmount');
    }
}
</script>