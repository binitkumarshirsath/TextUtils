
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React,{useState} from "react";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode} />
      <TextBox heading = "Enter your text : " mode = {mode}/>
    </>
  );
}

export default App;
