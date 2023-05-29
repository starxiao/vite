let mediaRecorder = null;

export function isSupportRecord() {
  return !!navigator.mediaDevices;
}

export function getMedia() {
  if(!isSupportRecord()) {
    console.log('当前浏览器不支持录制视频');
    return;
  }

  let params = {
    audio: true,
    video: true
  };


  return navigator.mediaDevices.getUserMedia(params);
}

export function isSupportType () {
  return MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm';
}

export async function onRecord() {
  let stream = await getMedia();
  let chunks = [];
  let type = isSupportType();

  mediaRecorder = new MediaRecorder(stream, {
    mimeType: type
  });

  mediaRecorder.addEventListener('dataavailable', (e) => {
    chunks.push(e.data);
  });


  mediaRecorder.addEventListener('stop', () => {
    let blob = new Blob(chunks, {
      type: chunks[0].type
    });

    let url = URL.createObjectURL(blob);
    
    console.log('录制视频链接', url);
  });

  mediaRecorder.start();
}

export function onStop() {
  mediaRecorder.stop();
}