import React from 'react'
import { DisplayHome } from '../displayHome/DisplayHome'
import { DisplayEachGroupNotes } from '../displayEachGroupNotes/DisplayEachGroupNotes'


export const DisplayNotes = (props) => {
  // console.log(props.gName)
  // console.log(props.gId)
  return (
  <>
    {props.display ? <DisplayHome></DisplayHome> : <DisplayEachGroupNotes groupId={props.gId} groupName={props.gName}></DisplayEachGroupNotes>}
  </>
  )
}
