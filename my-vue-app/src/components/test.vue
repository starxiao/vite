<template>
    <div class="test">
        <!-- <p>123</p>
        <p>props: {{text}}</p>
        <p>computed: {{validText}}</p>
        <p>computed: {{validText1}}</p>
        <p>count: {{count}}</p>
        <p>msg: {{msg}}</p>
        <p>username: {{obj.user}}</p>
        <div class="child">
            <keep-alive>
                <component :is="child"></component>
            </keep-alive>
            <button @click="child = (child=='child1'?'child2':'child1')">change1</button>
        </div> -->
        <input ref="input" v-show="isShow">
        <button @click="changeIsShow">click</button>
    </div>
</template>
<script>
import child1 from './child1.vue';
import child2 from './child2.vue';
import { ref, watchEffect } from 'vue';
export default {
    name: 'test',
    props: ['text'],
    data() {
        return {
            count: 0,
            msg: '',
            obj: {
                user: 'xxx'
            },
            child: 'child1',
            isShow: false
        }
    },
    computed: {
        validText() {
            console.log(12312);
            return this.msg.replace('world', 'xxx');
        },
        validText1: {
            get() {
                return this.text.replace('world', 'xiaoxx');
            },
            set(val) {
                console.log(val);
                this.msg = 'message';
            }
        }
    },
    mounted() {
        this.changeWatchEffect();
    },
    methods: {
        changeIsShow() {
            this.isShow = true;
            // this.$refs.input.focus();
            this.$nextTick(() => {
                console.log(this.$refs.input.focus());
            })
        },
        changeCount() {
            this.count++;
            this.msg = 'hello11';

            this.obj = {
                user: 'xiaoxx'
            }
            this.changeProxy();
        },
        changeProxy() {
            let obj = {
                user: 'xiaoxx'
            };

            let hander = {
                get(target, prop) {
                    console.log(`target${target}`);
                    console.log(`prop${prop}`)
                    return target[prop];
                },
                set(target, prop, value) {
                    console.log(`target${target}`);
                    console.log(`prop${prop}`);
                    console.log(`value${value}`);
                    target[prop] = `hello,${value}`;
                    return true;
                }
            };

            let proxy = new Proxy(obj, hander);

            console.log(proxy.user);
            proxy.user = 'xxx';
            console.log(proxy.user);

        },
        changeWatchEffect() {
            let num = ref(0);

            watchEffect(() => {
                console.log(num.value);
            });

            setTimeout(() => {
                num.value++;
            });
        }
    },
    components: {
        'child1': child1,
        'child2': child2
    }
}
</script>