import React from 'react'
import Sketch from 'react-p5';

import * as data from './tabjson.json';
const word = data.default;

function drawnoteline(p5, h){
    for(let noteline=0;noteline<6;noteline++){
        p5.line(10, 14+noteline*10 + h, p5.width-10, 14+noteline*10 + h)
    }
    //number
    p5.line(10 + p5.width/2 *(0),14 + h,10+ p5.width/2*0,64 + h)
    p5.line(p5.width/2,14 + h,p5.width/2,64 + h)
    p5.line(-10 + p5.width,14 + h,-10+ p5.width,64 + h)
}

export default function Note(notearray, timestamp) {
    let arr = notearray;

    //default tab
    arr = word;
    console.log(arr)
    function size_dict(d){let c=0; for (let i in d) ++c; return c}

    //function soundoutput(timestamp, p5, )

    let songduration;

    let setup = (p5, canvasParentRef) => {

        songduration = Math.round(size_dict(arr)/10)
        let xyz = p5.createCanvas(p5.windowWidth/2.4,8000).parent(canvasParentRef);
        let x = p5.windowWidth/3.5;
        let y = 150;
        xyz.position(x, y, 'relative');
        p5.pixelDensity(5);
        p5.background('black')

        p5.stroke(255,255,255)
        p5.text(10)

        for(let i=0;i<Math.floor(songduration/2);i++){
            drawnoteline(p5, i * 80);
            for(let j=0;j<10;j++){
                let timekey = 2*i + '.' + j;
                let numberofnote = arr[timekey].length
                
                let h,w;
                let adjnote = [];

                let checknorepeatw, checknorepeath;
                w = p5.map(j, 0, 9, 15, p5.width/2 - 10);
                for(let jj = 0; jj<numberofnote;jj++){
                    if(arr[timekey][jj][0] === 'e'){
                        h = i*80 + 14;
                    }
                    if(arr[timekey][jj][0] == 'B'){
                        h = i*80 + 24;
                    }
                    if(arr[timekey][jj][0] == 'G'){
                        h = i*80 + 34;
                    }
                    if(arr[timekey][jj][0] == 'D'){
                        h = i*80 + 44;
                    }
                    if(arr[timekey][jj][0] == 'A'){
                        h = i*80 + 54;
                    }
                    if(arr[timekey][jj][0] == 'E'){
                        h = i*80 + 64;
                    }
                    p5.textAlign(p5.CENTER);
                    if(checknorepeath != h || checknorepeatw != w){
                        p5.fill(0,0,0);
                        p5.noStroke();
                        p5.rect(w-5,h-5,10,10);
                        p5.stroke(255,255,255)
                        p5.fill(255,255,255);
                        p5.text(arr[timekey][jj].substring(1), w , h+5);
                    }
                    checknorepeath = h;
                    checknorepeatw = w;
                }
            }
            for(let j=1;j<10;j++){
                let timekey = (2*i+1) + '.' + j;
                let numberofnote = arr[timekey].length
                
                let h,w;
                let checknorepeatw, checknorepeath;
                w = p5.map(j, 0, 9, p5.width/2+5, p5.width - 20);
                for(let jj = 0; jj<numberofnote;jj++){
                    if(arr[timekey][jj][0] === 'e'){
                        h = i*80 + 14;
                    }
                    if(arr[timekey][jj][0] == 'B'){
                        h = i*80 + 24;
                    }
                    if(arr[timekey][jj][0] == 'G'){
                        h = i*80 + 34;
                    }
                    if(arr[timekey][jj][0] == 'D'){
                        h = i*80 + 44;
                    }
                    if(arr[timekey][jj][0] == 'A'){
                        h = i*80 + 54;
                    }
                    if(arr[timekey][jj][0] == 'E'){
                        h = i*80 + 64;
                    }
                    p5.textAlign(p5.CENTER);
                    if(checknorepeath != h || checknorepeatw != w){
                        p5.fill(0,0,0);
                        p5.noStroke();
                        p5.rect(w-5,h-5,10,10);
                        p5.stroke(255,255,255)
                        p5.fill(255,255,255);
                        p5.text(arr[timekey][jj].substring(1), w , h+5);
                    }
                    checknorepeath = h;
                    checknorepeatw = w;
                }
            }
        }
    };

    let draw = (p5) => {
        p5.stroke(255, 255, 255);
    };
    return (
        <>
            <div className="Note">
                <Sketch setup={setup} draw={draw} className="Note" />
            </div>
        </>
    )
}
