import React, { useState , useEffect } from "react";
import Sketch from "react-p5";
import Headers from "./Headers";
import Note from './Note';
import Soundoutput from './Soundoutput';
import "./MyTimer.css";
// import { useTimer } from 'react-timer-hook';
import { useTimer } from 'use-timer';
import "./handleinputfile.css"
import FileInput from './FileInput';
import { render } from "react-dom";

function App() {
  const {
    time, start, pause, reset, status
  } = useTimer({});

  const childCallback = (value) => {
    // value passed from child
    console.log(value)
  }
  /*const [data, setdata] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
        console.log(data)
      }
    )
  }, [])*/
  const notearray = []
  let songfile;
  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(p5.windowWidth/2, p5.windowHeight).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };
  let draw = (p5) => {
    p5.background("rgb(255,255,255)");
    p5.stroke(255);
    p5.strokeWeight(4);
  };

  const onChangeHandler=event=>{
    console.log(event.target.files[0])
    let filename = event.target.files[0].name

    //get file type
    let filetype = filename.split('.').pop();
    console.log(filetype);
    if(filetype == 'WAV' || filetype == 'wav'){
      console.log("Sending to Heroku...")
    }
    else{
      alert(filetype + " is not supported")
    }
  }

  return (
    <>
      <div className = "fileinputcontainer">
        <input type = "file" name = "file" onChange = {onChangeHandler}/>
      </div>
      <div className = "timer">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        <p>Elapsed time: {time}</p>
        {status === 'RUNNING' && <p>Running...</p>}
      </div>
      {/* <FileInput handleFile={song => handleFile}/> */}
      
      <div className="App">
        <Sketch setup={setup} draw={draw} className="App" />
      </div>
      <Headers timestamp = {time}/>
      <Note notearray = {notearray} timestamp = {time}/>
      <Soundoutput passToParent={childCallback}/>
    </>
  );
}

export default App;