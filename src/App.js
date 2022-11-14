// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Services from './components/Services';
import Contact from './components/Contact';
import User from './components/User';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/user/:name' element={<User/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
