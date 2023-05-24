<template>
  <div class="webrtc">
    <section class="video-box">
      <h5>本地视频</h5>
      <div class="local-media">
        <video
          autoplay
          playsinline
          ref="localVideo"
          id="localVideo"
          controls>
        </video>
      </div>
    </section>
    <section class="video-box">
      <h5>远端视频</h5>
      <div class="remote-media">
        <video
          autoplay
          playsinline
          ref="remoteVideo"
          id="remoteVideo"
          controls>
        </video>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

async function initUserMeida() {

  const localVideo = document.querySelector('#localVideo');
  const remoteVideo = document.querySelector('#remoteVideo');

  const socket = new WebSocket('ws://localhost:8080');

  socket.onopen = () => {
    console.log('信令通道创建成功！');
  };

  socket.onerror = () => {
    console.log('信令通道创建失败');
  }

  socket.onmessage = e => {
    const { type, sdp, iceCandidate } = JSON.parse(e.data);
    if (type === 'offer') {
      navigator.mediaDevices.getUserMedia();		
      const offerSdp = new RTCSessionDescription({ type, sdp });
      peer.setRemoteDescription(offerSdp).then(() => {
        peer.createAnswer(answer => {
          socket.send(JSON.stringify(answer));
          peer.setLocalDescription(answer)
        });
      });
    }
  }

  const peer = new RTCPeerConnection();

  peer.onicecandidate = e => {
    if (e.candidate) {
      socket.send(JSON.stringify({
        type: 'offer_ice',
        iceCandidate: e.candidate
      }));
    } 
  };

  peer.ontrack = e => {
    if (e && e.streams) {
      remoteVideo.srcObject = e.streams[0];
    }
  };

  if(!navigator.mediaDevices) {
    console.log('用户浏览器暂时不支持本地视频');
    return;
  }

  let streams = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 200,
      height: 200,
      frameRate: 15,
    },
    radio: true
  });

  localVideo.srcObject = streams;

  streams.getTracks().forEach(track => {
		peer.addTrack(track, streams);
	});

  peer.createOffer().then(offer => {
    console.log('offer', offer);
	  peer.setLocalDescription(offer);
	  socket.send(JSON.stringify(offer));
  });
}

onMounted(() => {
  initUserMeida();
});
</script>
