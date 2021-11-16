import React, { Component } from 'react';
import AudioAnalyser from './AudioAnalyser';
import "./Soundoutput.css";

class Soundoutput extends Component {

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  render() {
    return (
      <div className="soundinput">
        <div className="soundinputbuttoncontainer" >
          <button className="button-64" role="button" onClick={this.toggleMicrophone}><span class="text">{this.state.audio ? 'STOP' : 'RECORD'}</span></button>
        </div>
        <div className = "soundgraph">{this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}</div>
      </div>
    );
  }
}

export default Soundoutput;
