import React, { useState , useEffect } from "react";
import Sketch from "react-p5";
import Headers from "./Headers";
import Note from './Note';
import Soundoutput from './Soundoutput';
import MyTimer from './MyTimer';


function App() {
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
  let timestamp;
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
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

  

  return (
    <>
      {/* <MyTimer expiryTimestamp={time} /> */}
      <div className="App">
        <Sketch setup={setup} draw={draw} className="App" />
      </div>
      <Headers timestamp = {timestamp}/>
      <Note notearray = {notearray} timestamp = {timestamp}/>
      <Soundoutput timestamp = {timestamp} />
    </>
  );
}

export default App;