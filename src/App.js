import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import AboutUs from './AboutUS';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
             {/* <Homepage/> */}
             <Header/>
             <Carousel autoPlayInterval={5000} />
             <AboutUs/>
              <Services/>
              <Login/>
              <Signup/>
             <Footer/> 
    </div>
  );
}

export default App;
