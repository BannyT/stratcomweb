import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import AboutUs from './AboutUS';
import Footer from './Footer';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
            <Router> 
                <Routes>
                   <Route path="/*" element={
                    <>
                      <Header/> 
                      <Routes>
                           <Route path='/' element={<Home/>}/>
                           <Route path='/about' element={<AboutUs/>}/>
                           <Route path='/services' element={<Services/>}/>
                      </Routes>
                    <Footer/> 

                    </>
                   } />
                   <Route path='/login'  element={<Login/>} />
                   <Route path ='/signup' element={<Signup/>}/>
                   <Route path ='/dashboard' element={<Dashboard/>}/>

                </Routes>
               </Router>
                    
              {/* <Login/>
              <Signup/> */}
             
    </div>
  );
}

export default App;
