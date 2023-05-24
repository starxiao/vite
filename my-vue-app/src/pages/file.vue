<template>
  <div class="file-pages">
    <!-- <a-upload
      v-model:file-list="fileList"
      name="file"
      @change="onChange"
    >
    </a-upload>
    <a-button type="primary" size="large" shape="round">上传</a-button> -->
    <h1>vue 3 单文件组件</h1>
    <p>{{ count }}</p>
    <!-- <p>num {{  }}</p> -->
    <span class="span" ref="span">深度深度深度</span>
    <van-button @click="onClick" :disabled="isClicked">点击</van-button>
  </div>  
</template>
<script setup>
import { track } from '@vue/reactivity';
import { onMounted, ref, onBeforeMount, onBeforeUnmount } from 'vue'

  const count = ref(0)
  const isClicked = ref('')

  function onClick() {
    count.value++;
  }

  function reactive(obj) {
    return new Proxy(obj, {
      get(target, key) {
        console.log('读取了', target[key])
        // track(target, get);
        return target[key]
      },
      set(target, key, value) {
        console.log(`设置了旧值${target[key]}，为新值${value}`)
        target[key] = value
        return true
      }
    })
  }

  let effectActvie = null
  function whendepschange(change) {
    const effect = () => {
      effectActvie = effect
      change()
      effectActvie = null
    }
    effect()
  }
  onMounted(() => {
    console.log(this)
    console.log(this.$refs.span);

    console.log(`The initial count is ${count.value}.`)
    let obj = {
      count: 1,
      params: {
        num: 0
      }
    }
    let obj1 = reactive(obj);
    let obj2 = {
      count: 0,
      params: {}
    }
    function change() {
      obj2.count = obj1.count + 2;
      obj2.params.num = obj1.params.num + 2;
    }

    whendepschange(change)

    obj1.count = 2;
    obj1['params'].num = 2

    console.log(obj2);

  });

  onBeforeUnmount(() => {
    console.log(this.$ref.span);
  }) 

  // export default {
  // setup() {
  //   const fileList = ref([]);

  //   const afterRead = (file) => {
  //     console.log(file.content);
  //   }

  //   return {
  //     fileList,
  //     afterRead
  //   }
  // }, 
</script>
<style scoped>
  .span {
    width: 100px;
    height: 200px;
    padding: 20px;
    /* margin: 30px; */
    color: black;
    background: red;
  }
</style>