import React from 'react';
import { Canvas } from 'react-canvas-base';

const App = () => {
    let size: number = 10;
    let direction = 0.2;

    return (
        <>
            <Canvas drawMode={0} onDraw={(crc, frameTime) => {
                crc.clear();
                crc.setFillStyle("#444");
                crc.setStrokeStyle("#999", 2);
                crc.drawRect(200 - size / 2, 200 - size / 2, size, size);

                size += direction * frameTime;
                if (size < 10) direction = 0.2;
                if (size > 200) direction = -0.2;
            }} />
        </>
    );
}

export default App;
