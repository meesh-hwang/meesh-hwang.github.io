import './App.css';
import construction from './assets/construction.png';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <img className='construction' src={construction} alt='construction sign' />
      <Footer />
    </div>
  );
}

export default App;
