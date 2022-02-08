
import './App.css';
import Interests from './components/Interests';
import Photo from './components/Photo';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="content">
      <Photo/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
