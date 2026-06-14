import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import AboutUs from './AboutUS';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
             {/* <Homepage/> */}
             <Header/>
             <Carousel autoPlayInterval={5000} />
             <AboutUs/>
              <Services/>
             {/* <Footer/>  */}
    </div>
  );
}

export default App;
