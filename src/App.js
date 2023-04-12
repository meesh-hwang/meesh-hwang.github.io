import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import Dropdown from './components/nav/Dropdown';
import Development from './components/development/Development';
import About from './components/About';
import Footer from './Footer';

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <Banner />
      <Dropdown title="PROJECTS" active={active} setActive={setActive} content={<Development/>} />
      <Dropdown title="ABOUT" active={active} setActive={setActive} content={<About/>} />
      <Footer />
    </div>
  );
}

export default App;
