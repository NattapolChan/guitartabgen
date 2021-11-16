import React from 'react'
import Sketch from 'react-p5';

export default function Headers() {
    var Songname;
    var Authorname;
    var Inputsong;
    let preload = (p5) => {
        Songname = "Canon in C";
        Authorname = "Pachelbel"
    }

    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(p5.windowWidth/2, 110).parent(canvasParentRef);
        let x = p5.windowWidth/4;
        let input = p5.createFileInput(handleFile);
        input.position(p5.windowWidth/2,80);
        let y = 10;
        
        xyz.position(x, y);
    };

    function handleFile(file, p5) {
        console.log(file);
        console.log(file.type);
        Inputsong = file;
        console.log(Inputsong)
    }

    let draw = (p5) => {
        p5.textSize(30);
        p5.textAlign(p5.CENTER);
        p5.fill(255, 116, 138)
        p5.text(Authorname + ' - ' + Songname, p5.windowWidth/4, 50);
    };
    return (
        <>
        <div className="Headers">
            <Sketch preload = {preload} setup={setup} draw={draw} className="Headers" />
        </div>
        </>
    )
}
