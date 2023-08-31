import React , { useState }from 'react'; // Import React
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#183D3D";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#fff";
      showAlert("light mode has been enabled","success")
    }
  }
  const [alert , setAlert] =useState();
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500
   
    );
  }
  return (
  <>

  <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} />
        </Routes>
      </div>
   </Router>
  
  </>
  );
}

export default App; // Don't forget to export the component
