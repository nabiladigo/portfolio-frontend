import './styles/App.scss';
import {Route, Routes} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Resume from './pages/Resume';

const App = () =>{
  const URL='http://localhost:5000/';
  // const URL = 'https://digo-portfolio.herokuapp.com/'

  return (
    <div className='app'>
        <Nav />
        <Routes>
             <Route exact path='/' element ={<Home  URL={URL} />} />
            <Route path='/projects' element = {<Projects  URL={URL} />} />
            <Route path='/about' element = {<About  URL={URL} /> } />
            <Route path='/contact' element= {<Contact URL={URL} />} />   
            {/* <Route path='/resume' element= {<Resume URL={URL} />} />    */}
        </Routes>
         <Footer />
    </div>
  )
}
export default App;