
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
    
      {/* <Navbar />
     
      
      <Routes>

        <Route path='/home' element={<Home />} />
         
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/projects' element={<Project />} />
        <Route path='/skills' element={<Skills/>} />

          
      </Routes> */}

      
      <Navbar/>
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      
      <br>
      </br>
  
      <p style={{ background: "Grey" }}>Created By YASH RAJ</p>
      
    
    
   
      
    </div>
  );
}

export default App;
