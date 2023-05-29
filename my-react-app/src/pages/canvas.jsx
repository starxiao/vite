import React from "react";
class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.drawLine();
    // this.drawRect();
    // this.drawCircle();
    this.drawSmile();
  }

  drawLine() {
    const ele = document.getElementById('canvas');
    const ctx = ele.getContext('2d');

    ctx.moveTo(20, 20);
    ctx.lineTo(20, 120);
    ctx.lineTo(120, 120);
    ctx.lineTo(20, 20);
    ctx.stroke();
  }

  drawRect() {
    const ele = document.getElementById('canvas');
    const ctx = ele.getContext('2d');

    ctx.strokeRect(180, 180, 100, 100);
    
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 200, 100, 100);

    ctx.clearRect(220, 220, 50, 50);
  }

  drawCircle() {
    const ele = document.getElementById('canvas');
    const ctx = ele.getContext('2d');

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2);
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(250, 250, 50, 100, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();

    ctx.stroke();

  }

  drawSmile() {
    const ele = document.getElementById('canvas');
    const ctx = ele.getContext('2d');

    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.stroke();

    // ctx.beginPath();
    ctx.moveTo(230, 200);
    ctx.arc(200, 200, 30, 0, Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    ctx.moveTo(185, 185);
    ctx.arc(180, 185, 5, 0, Math.PI * 2);
    // ctx.stroke();

    // ctx.beginPath();
    ctx.moveTo(225, 185);
    ctx.arc(220, 185, 5, 0, Math.PI * 2);

    ctx.stroke();
  }



  render() {
    return (
      <div className="canvas-box">
        <h3>canvas 绘画中</h3>
        <canvas id="canvas" className="canvas" width={500} height={500}>
          当前浏览器不支持canvas元素，请升级或者更换浏览器
        </canvas>
      </div>
    )
  }
}

export default Canvas;