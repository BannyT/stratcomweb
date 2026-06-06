import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';

function App() {
  return (
    <div className="App">
             <Header/>
             <Carousel autoPlayInterval={5000} />
             <Services/>
    </div>
  );
}

export default App;
