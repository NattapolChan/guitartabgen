import React, { useState , useEffect } from "react";
import Sketch from "react-p5";

function fft() {

  const setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(p5.windowWidth/2, p5.windowHeight).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };

  const draw = (p5) => {
    
  };

  return (
    <>
      <div className=...>
        <Sketch setup={setup} draw={draw} className="fft"/>
      </div>

    </>
  );
}

export default fft