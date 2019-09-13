import React, {useState} from 'react';
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'

function App() {
  //useState creates a state variable with a set function and sets initial value to 0
  //We now pass the state value to colorPicker

  const [color,setColor] = useState(0);
  return (
    <div className="App">
      <ColorPicker 
        currentColor = {color} 
        setColor = { (color) => setColor(color) }
      />
      <Canvas 
        currentColor = {color}
      />
    </div>
  );
}

export default App;
