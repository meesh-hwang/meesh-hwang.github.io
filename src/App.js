import './App.css';
import Banner from './components/Banner';
import Footer from './Footer';
import construction from './assets/construction.png';

function App() {

  return (
    <div className="App">
      <Banner />
      <img src={construction} className='construction' />
      <Footer />
    </div>
  );
}

export default App;
