import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Boxes from "./Boxes";

function App() {
  const [square, setSquare] = useState(Boxes)

  const squareElement = square.map(boxes => (
    <div className="box">{}</div>
  ))


  return (
   
    <div className="App">
      {/* < Header />
      <Meme /> */}
      {squareElement}
    </div>
  );
}

export default App;
