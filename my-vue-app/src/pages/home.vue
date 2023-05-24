<template>
	<div class="home">
		<h2>{{value}}</h2>
		<button @click="onClick">click</button>
    <van-uploader :after-read="afterRead" />

    <Child></Child>
	</div>
</template>
<script>
import Child from '@/components/child.vue';
import { httpGet } from '@/utils/http';
import { computed } from 'vue';
export default {
  components: {
    Child
  },
  provide() {
    return {
      count: computed(() => this.count )
    }
  },
	data() {
		return {
			count: 1
		}
	},
	computed: {
		value() {
			console.log(this);
			return this.count;
		}
	},
	mounted() {
		console.log('mounted');
	},
	methods: {
		async onClick() {
			console.log(Date.now());
      this.count++;
			let res = await httpGet('/api/user/list', {});
			console.log(Date.now());
			console.log(res);
		},
		init(arrayBuffer) {
      let worker = new Worker('http://localhost:3000/ffmpeg-worker-mp4.js');

      worker.onmessage = function(e) {
        const msg = e.data;
        switch (msg.type) {
          case "ready":
            worker.postMessage({
              type: "run", 
              MEMFS: [{name: "input.mp4", data: arrayBuffer }],
              arguments: '-i input.mp4 output.mp4'.split(' ')
              });
            break;
          case "stdout":
            console.log(msg.data);
            break;
          case "stderr":
            console.log(msg.data);
            break;
          case "done":
            console.log(msg.data);
            break;
        }
      };
		},
    afterRead({ file }) {
      console.log(file);
      let fileReader = new FileReader();
      fileReader.onload = function() {
        this.init(fileReader.result);
      }.bind(this)
      fileReader.readAsArrayBuffer(file);
    }
	}
}
</script>
