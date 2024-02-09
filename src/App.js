import { useState } from 'react';
import './App.css';
import Navbar from './componet/Navbar';
import Alert from './componet/Alert';
import TextForm from './componet/TextForm';

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      message:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },1500);
  }
  const[mode,setmymode]=useState('light')
  const[btn,setbtm]=useState('Enable Dark Mode')
  const toggles=()=>{
    if(mode==='light')
    {
      setmymode('dark');
      setbtm('Enable Light Mode');
      document.body.style.backgroundColor='#02021d';
      showAlert("Dark mode is enable", "success");
      // document.title="TextUtils-Dark Mode"
    }
    else{
      setmymode('light');
      setbtm('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable", "success");
      // document.title="TextUtils-Light Mode"
    }
  }
  return (
    <>
      <Navbar title="Utensils" about="About us" mode={mode} toggles={toggles} btn={btn}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert}heading="Enter the text" mode={mode}/>
      </div>
     
    </>
  );
}

export default App;
