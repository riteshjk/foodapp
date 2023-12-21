import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Allroutes from './components/Allroutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
