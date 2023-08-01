import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Slider from "./components/İmgSlider"
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan/>
      <Rooms/>
      <Slider/>
    </div>
  );
}

export default App;
