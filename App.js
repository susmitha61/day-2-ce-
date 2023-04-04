
import './App.css';
import Naving from './Component/Naving'
import Web from './Component/Web';
import Footer from './Component/Footer';
import UncontrolledExample from './Component/UncontrolledExample';
import LinkedExample from './Component/LinkedExample';


function App() {
  return (
    <div className="App">
      <Naving/>
      <Web/> 
      <Footer/>
     <UncontrolledExample/><br></br><br></br>
      <LinkedExample/>

    </div>
  );
}

export default App;
