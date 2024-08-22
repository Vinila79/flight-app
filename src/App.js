// import logo from './logo.svg';
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
// import Lounge from './components/Lounge/Lounge';
import Navbar from './components/Navbar/navbar';
import Search from './components/Search/search';
import Subscribers from './components/Subscribers/sub'
import Support from './components/Support/Support';
import Travelers from './components/Travelers/Travelers';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      {/* <Lounge/> */}
      <Travelers/>
      <Subscribers/>
      <Footer/>
   
    </div>
  );
}

export default App;
