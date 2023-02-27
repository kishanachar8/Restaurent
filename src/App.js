import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/menu';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
