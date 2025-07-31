import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title='TextForge'/>
      <div className='container'> 
      <TextForm heading='Enter text to Format'/>
      </div>
    </div>
  );
}

export default App;
