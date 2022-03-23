import './App.css';
import {Route, Routes} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () =>{
  const URL='https://digo-portfolio.herokuapp.com/';

  return (
    <div>
        <Nav />
        <Routes>
             <Route exact path='/' element ={<Home  URL={URL} />} />
            <Route path='/projects' element = {<Projects  URL={URL} />} />
            <Route path='/about' element = {<About  URL={URL} /> } />
            <Route path='/contact' element= {<Contact URL={URL} />} />   
        </Routes>
         <Footer />
    </div>
  )
}
export default App;