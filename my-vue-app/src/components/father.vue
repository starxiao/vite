<template>
    <div>
        father{{msg}}
        <button @click="msg=123"></button>
    </div>
</template>
<script>
import Child from './child.vue';
export default {
  components: { Child },
    name: 'father',
    data() {
        return {
            msg: 'hello'
        }
    },
    beforeCreated() {
        console.log('father before created');
    },
    created() {
        console.log('father created');
    },
    beforeMounted() {
        console.log('father beforeMounted');
    },
    mounted() {
        console.log('father mounted');
    },
    beforeUpdate() {
        console.log('father before update');
    },
    updated() {
        console.log('father updated');
    },
    beforeUnmount() {
        console.log('father before Ummount');
    },
    unmount() {
        console.log('father before unmount');
    }
}
</script>