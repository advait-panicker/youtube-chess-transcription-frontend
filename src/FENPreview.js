import Sketch from "react-p5";
import React, { useEffect, useState } from "react";

function FENPreview({ fen }) {
    const TILESIZE = 30;
    const pieceImageNames = ['wp', 'wr', 'wn', 'wb', 'wq', 'wk', 'bp', 'br', 'bn', 'bb', 'bq', 'bk'];
    let [pieceImages, setPieceImages] = useState({});
    const setup = (p, parent) => {
        p.createCanvas(TILESIZE * 8, TILESIZE * 8).parent(parent);
        let pieceImagesTmp = {};
        for (let i = 0; i < pieceImageNames.length; i++) {
            let piece = pieceImageNames[i];
            pieceImagesTmp[piece] = p.loadImage(`assets/${piece}.png`);
        }
        setPieceImages(pieceImagesTmp);
    }
    const draw = (p) => {
        let x = 0;
        let y = 0;
        p.noStroke();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    p.fill(255, 229, 207);
                } else {
                    p.fill(158, 73, 2);
                }
                p.rect(x, y, TILESIZE, TILESIZE);
                x += TILESIZE;
            }
            x = 0;
            y += TILESIZE;
        }

        if (!fen || fen === '') {
            return;
        }

        x = 0;
        y = 0;

        let rows = fen.split(/\s/g)[0].split("/");

        for (let j = 0; j < rows.length; j++) {
            let row = rows[j];
            for (let k = 0; k < row.length; k++) {
                let c = row[k];
                // if c is a digit
                if (c >= '0' && c <= '9') {
                    x += parseInt(c) * TILESIZE;
                    continue;
                }
                let pieceName = `${c === c.toUpperCase() ? 'w' : 'b'}${c.toLowerCase()}`;
                p.image(pieceImages[pieceName], x, y, TILESIZE, TILESIZE);
                x += TILESIZE;
            }
            x = 0;
            y += TILESIZE;
        }
    }

    return <Sketch className="fen-preview" setup={setup} draw={draw} />
}

export default FENPreview;