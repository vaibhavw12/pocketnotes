import React from 'react'
import { DisplayHome } from '../displayHome/DisplayHome'
import { DisplayEachGroupNotes } from '../displayEachGroupNotes/DisplayEachGroupNotes'


export const DisplayNotes = (props) => {
  // console.log(props.gName)
  // console.log(props.gId)
  const back = ()=>{
    props.setBackBtn(true)
  }
  
  return (
  <div>
    {props.display ? <DisplayHome></DisplayHome> : <DisplayEachGroupNotes onBack={back} groupId={props.gId} groupName={props.gName}></DisplayEachGroupNotes>}
    </div>
  )
}
