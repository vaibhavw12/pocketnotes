// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

import { CreateNotes } from "./components/createNotes/CreateNotes";
import { DisplayNotes } from "./components/displayNotes/DisplayNotes";

function App() {
  const [display, setDisplay] = useState(true)
  const [gName, setGName] = useState()
  const [gId,setGId] = useState()

  return (
    <div id='mainApp'>
        <CreateNotes setGId={setGId} setGName={setGName} setDisplay={setDisplay}></CreateNotes>
        <DisplayNotes gId={gId} gName={gName} display={display}></DisplayNotes>
    </div>
  );
}

export default App;
