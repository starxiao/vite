<template>
  <div class="player-box">
    <h3>西瓜视频播放器</h3>
    <div id="player" class="player-dom"></div>
  </div>
</template>

<script>
import Player from 'xgplayer/dist/simple_player';
import volume from 'xgplayer/dist/controls/volume';
import playbackRate from 'xgplayer/dist/controls/playbackRate';
import demo from '@/assets/demo.mp4';
import poster from '@/assets/poster.jpg';

export default {
  name: 'player',
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.initPlayer();
  },
  methods: {
    initPlayer() {
      this.player = new Player({
        id: 'player',
        url: demo,
        poster: poster,
        height: 500,
        width: 800,
        controlPlugins: [
          volume,
          playbackRate
        ],
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        closeInactive: true,
        progressDot: [
          {
            time: 10, //展示标记的时间
            text: '认证识别不合规', //鼠标hover在标记时展示的文字
            duration: 8, //标记段长度（以时长计算）
            style: { //标记样式
              background: '#fffb0d'
            }
          }, 
          {
            time: 22,
            duration: 10,
            style: {
              background: '#ff2700'
            }
          }, 
          {
            time: 56,
            duration: 8,
            style: {
              background: '#ff2700'
            }
          }, 
          {
            time: 76,
            style: {
              background: '#ff2700'
            }
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
  .player-box {
    height: 100%;
    margin: 16px;
  }

  ::v-deep .xgplayer-skin-default .xgplayer-progress-played {
    background-image: linear-gradient(90deg,#0beb29,#26a838);
  }
</style>