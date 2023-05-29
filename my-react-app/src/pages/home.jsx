import React from 'react';
import { Button } from 'antd';
import { onRecord, onStop } from '../commons/mediaRecorder';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'xiaoxx'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        onRecord();
    }

    onStop() {
        onStop();
    }

    render() {
        return(
            <div className="container">
                <p className="msg">{this.state.msg}</p>
                <Button type="primary" size="small" onClick={this.handleClick}>开始录制视频</Button>
                <Button type="primary" size="small" onClick={this.onStop}>结束录制视频</Button>
            </div>
        )
    }
}

export default Home