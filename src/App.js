import React from 'react';
import './App.css';
import { Canvas } from 'react-canvas-base';

function App() {
  const draw = (crc, frametime) => {
      crc.setStrokeStyle("#0F0", 4);
      crc.drawLine(10, 10, 100, 50);
  }

  return (
    <div>
      <Canvas width={500} height={500} onDraw={draw}></Canvas>
    </div>
  );
}

export default App;
