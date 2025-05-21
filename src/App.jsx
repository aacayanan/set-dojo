import './App.css'
import Diamond from "./cards/Diamond.jsx";
import Circle from "./cards/Circle.jsx";
import Rectangle from "./cards/Rectangle.jsx";

function App() {
  return (
      <div>
          <Diamond color="red" shading="open" quantity={1} />
          <Diamond color="green" shading="striped" quantity={2} />
          <Diamond color="blue" shading="solid" quantity={3} />
          <Circle color="red" shading="open" quantity={1} />
          <Circle color="green" shading="striped" quantity={2} />
          <Circle color="blue" shading="solid" quantity={3} />
          <Rectangle color="red" shading="open" quantity={1} />
          <Rectangle color="green" shading="striped" quantity={2} />
          <Rectangle color="blue" shading="solid" quantity={3} />
      </div>
  )
}

export default App
