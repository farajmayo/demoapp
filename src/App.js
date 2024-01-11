import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav';
import TextForm from './components/fourms';
import About from './components/about';
import Alert from './components/Alert';

import { BrowserRouter,  Routes, Route } from 'react-router-dom';


function App() {
  // State for the color mode

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042742'
      showAlert('Light Mode Has Been Activated', 'Successfully !')
      document.getElementById("textonly").style.color = "white";
      document.getElementById("textonlya").style.color = "white";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode Has Been Activated', 'Successfully !')
      document.getElementById("textonly").style.color = "black";
      document.getElementById("textonlya").style.color = "black";
    }
  }

  return (
    <>
    
      {/* Navbar Component */}
      <Navbar title="RaJ MeO" aboutme="About" mode={mode} toggleMode={toggleMode} />

      {/* Alert Component */}
      <Alert alert={alert} />

      {/* Main Content */}
      <div className="container my-3" toggleMode={toggleMode}>


        {/* Uncomment the following line when About component is ready */}
        <BrowserRouter>
        
          <Routes>


            <Route exact path='/About' element={<About />} />
            <Route exact path='/'  element={ <TextForm heading="Enter Text Below" mode={mode} />} />


          </Routes>
          
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;