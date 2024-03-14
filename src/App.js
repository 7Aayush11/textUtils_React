/*<About/>
    </Route>
    <Route path="/">
    <div className='container my-2'>
    <TextForm {showAlert={showAlert}} heading="Enter your text below"/>
    </div>*/

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const[mode,setMode] = useState('light')
  const [alert, setAlert] = useState("");
  const showAlert=(message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#000032";
      document.body.style.color="#badcff";
      showAlert("Dark mode active", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode active", "success");
    }

  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert={alert}></Alert>

      <div className='container my-2'>
        <TextForm showAlert={showAlert} mode={mode} heading="Enter your text below"/>
      </div>
      <div className='container my-2'>
        <About mode={mode}/>
      </div>
    {/*<Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<div className='container my-2'>
            <TextForm showAlert={showAlert} heading="Enter your text below"/>
          </div>}/>
      </Routes>
    </Router>*/}
    </>
  );
}

export default App;
