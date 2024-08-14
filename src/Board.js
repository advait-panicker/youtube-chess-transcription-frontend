import React, { useEffect } from 'react';
import p5 from 'p5';

function isValidFEN(fen) {
    if (fen == "") {
        return "";
    }
    let parts = fen.split(/\s/g);
    let board = parts[0];
    let rows = board.split("/");
    if (rows.length != 8) {
        return `Wrong number of rows: ${rows.length}`;
    }
    let validPieces = ['p', 'r', 'n', 'b', 'q', 'k', 'P', 'R', 'N', 'B', 'Q', 'K'];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let count = 0;
        for (let j = 0; j < row.length; j++) {
            let c = row[j];
            if (c >= '1' && c <= '8') {
                count += parseInt(c);
            } else {
                if (!validPieces.includes(c)) {
                    return `Invalid piece ${c} at row ${i + 1} col ${j + 1}`;
                }
                count++;
            }
        }
        if (count != 8) {
            return `Invalid row length at row ${i + 1}`;
        }
    }
    return "";
}

// https://dev.to/christiankastner/integrating-p5-js-with-react-i0d
const Board = ({ fen }) => {

    const myRef = React.createRef();

    const TILESIZE = 25;

    const Sketch = (p) => {

        const pieceImageNames = ['wp', 'wr', 'wn', 'wb', 'wq', 'wk', 'bp', 'br', 'bn', 'bb', 'bq', 'bk'];
        let pieceImages = {};
        
        p.setup = () => {
            p.createCanvas(TILESIZE*8, TILESIZE*8);
            p.noStroke();
            for (let i = 0; i < pieceImageNames.length; i++) {
                let piece = pieceImageNames[i];
                pieceImages[piece] = p.loadImage(`assets/${piece}.png`);
            }
        }

        p.draw = () => {

            if (!isValidFEN(fen)) {
                p.textSize(20);
                p.textAlign(p.CENTER, p.CENTER);
                p.text("Invalid FEN", p.width / 2, p.height / 2);
                return;
            }

            let x = 0;
            let y = 0;
            p.noStroke();
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
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

            x = 0;
            y = 0;

            let rows = fen.split(/\s/g)[0].split("/");

            for (let j = 0; j < rows.length; j++) {
                let row = rows[j];
                for (let k = 0; k < row.length; k++) {
                    let c = row[k];
                    if (c >= '0' && c <= '9') {
                        x += parseInt(c) * TILESIZE;
                        continue;
                    }
                    let pieceName = `${c == c.toUpperCase() ? 'w' : 'b'}${c.toLowerCase()}`;
                    p.image(pieceImages[pieceName], x, y, TILESIZE, TILESIZE);
                    x += TILESIZE;
                }
                x = 0;
                y += TILESIZE;
            }
        }
    }

    useEffect(() => {
        const myP5 = new p5(Sketch, myRef.current)
    }, [])

    return (
        <div ref={myRef}>

        </div>
    )
}

export default App;
