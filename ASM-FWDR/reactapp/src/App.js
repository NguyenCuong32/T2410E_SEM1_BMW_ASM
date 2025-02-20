import './App.css';
import Header_js from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_js from './pages/Home';
import Product_js from './pages/Product';
import Footer_js from './components/footer';
import Retailer_js from './pages/Retailer';
import Aboutus_js from './pages/aboutus'
function App() {
  return (
    <div className="App">
        <Router>
            <Header_js></Header_js>
            <main className='content'>
              <Routes>
                <Route path='/homepage' element={<Home_js></Home_js>}></Route>
                <Route path='/' element={<Home_js></Home_js>}></Route>
                <Route path='/productpage' element={<Product_js></Product_js>}></Route>
                <Route path='/retailerpage' element={<Retailer_js></Retailer_js>}></Route>
                <Route path='/aboutuspage' element={<Aboutus_js></Aboutus_js>}></Route>
              </Routes>
            </main>
            <Footer_js></Footer_js>
        </Router>
    </div>
  );
}

export default App;
