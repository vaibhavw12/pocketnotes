// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'

import { CreateNotes } from "./components/createNotes/CreateNotes";
import { DisplayNotes } from "./components/displayNotes/DisplayNotes";

function App() {
  const [display, setDisplay] = useState(true)
  const [gName, setGName] = useState()
  const [gId,setGId] = useState()
  const [showCreateNotes, setShowCreateNotes] = useState(false);
  const [displayStyleCreateComp, setDisplayStyleCreateComp] = useState('block');
  const [displayStyleDispComp, setDisplayStyleDispComp] = useState(null);
  const [backBtn, setBackBtn] = useState(false)
  useEffect(()=>{
    if(showCreateNotes && window.innerWidth <= 650){
      setDisplayStyleCreateComp("none")
      setDisplayStyleDispComp("block")
    }
    
    if(backBtn){
      setDisplayStyleCreateComp('block')
      setDisplayStyleDispComp('none')
    }
   
  },[showCreateNotes, backBtn])
  return (
    <div id='mainApp'>
      {/* {showCreateNotes === true && window.innerWidth <= 650 ? (<span className="display-notes"><DisplayNotes gId={gId} gName={gName} display={display}></DisplayNotes></span>) : (<></>) } */}
    <span style={{display: displayStyleCreateComp}} className="create-notes"><CreateNotes setBackBtn={setBackBtn} setShowCreateNotes={setShowCreateNotes} setGId={setGId} setGName={setGName} setDisplay={setDisplay}></CreateNotes></span>  
     <span style={{display: displayStyleDispComp}} className="display-notes"><DisplayNotes setBackBtn={setBackBtn}  gId={gId} gName={gName} display={display}></DisplayNotes></span> 
    </div>
  );
}

export default App;
