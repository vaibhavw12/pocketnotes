import React, { useState } from 'react'
import styles from './DisplayEachGroupNotes.module.css'
import sendBtn from './Vector (4).png'

export const DisplayEachGroupNotes = (props) => {

  let [currentNote, setCurrentNote] = useState()
  let [print, setPrint] = useState()
    // props.groupName
    // console.log(props.groupId)
    const getGroup = JSON.parse(localStorage.getItem("groups"))
    const getNotes = getGroup[props.groupId]

    let color = getNotes.color
    // console.log(color)
    const divStyle = {
      backgroundColor: color, // Use the color prop to set the background color
      height: '3rem',
      width: '3rem',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '2rem'
    }

    // console.log(getGroup[props.groupId])

    const changeHandler = (e)=>{
      if(print === true){
        setPrint(false)
      }else{
        setPrint(true)
      }
        setCurrentNote(e.target.value)
    }

    const saveNote = ()=>{
      // console.log(currentNote)
      if(print === true){
        setPrint(false)
      }else{
        setPrint(true)
      }
      
      const currentDate = new Date();

      // Get the current hours and minutes
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      
      // Determine whether it's AM or PM based on the current hour (24-hour format)
      const amOrPm = currentHours >= 12 ? "PM" : "AM";
      
      // Convert the hours to a 12-hour format and add leading zeros
      const hours12 = (currentHours % 12 || 12).toString().padStart(2, '0');
      
      // Format the minutes with leading zeros
      const minutes = currentMinutes.toString().padStart(2, '0');
      
      // Format the time as a string in 12-hour format with leading zeros
      const currentTime = `${hours12}:${minutes} ${amOrPm}`;
      

      // Get the current day, month, and year
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.toLocaleString('en-us', { month: 'long' }); // Get the full month name
      const currentYear = currentDate.getFullYear();

      // Format the date as a string
      const currentDateFormatted = `${currentDay} ${currentMonth} ${currentYear}`;

      const currentNoteobj = {
        date : currentDateFormatted,
        time : currentTime,
        textNote : currentNote
      }
      getNotes.notes.push(currentNoteobj)
      // console.log(getNotes.notes)
  
      localStorage.setItem("groups", JSON.stringify(getGroup));
  
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // Trigger the saveNote function when Enter key is pressed
        saveNote();
      }
    };
  return (
    <div className={styles.displayEachGroupNotesCard}>
       <header className={styles.notesHeader}>
       <div style={divStyle}><span className={styles.notesGroupColor}>{props.groupName[0]+props.groupName[1]}</span></div>
        <div className={styles.notesGroupName}>{props.groupName}</div>
       </header>
       <section className={styles.displayNotesSection}>
          <div className={styles.displayNotesCard}>
              {getNotes.notes.map((item,index)=>(
                  <div className={styles.eachDisplayNotesCard} key={index}>
                      <div style={{width:'10vw'}}>
                          <span>{item.time}</span><br></br>
                          <span>{item.date}</span>
                      </div><br></br>
                      <div style={{width:'50vw'}}>
                          <span>{item.textNote}</span>
                      </div>
                  </div>
              ))}
            </div>
       </section>
       <section className={styles.typeNotesSection}>
            <div>
               <textarea onKeyDown={handleKeyDown} onChange={changeHandler} value={currentNote} className={styles.inputNotes} placeholder='Enter your text here...........'></textarea>
               <img onKeyDown={handleKeyDown} role="button" tabIndex={0} onClick={saveNote} className={styles.sendBtn} src={sendBtn} alt='enter'></img>
               <span style={{display:'none'}}>{print}</span>
            </div>
       </section>
    </div>
  )
}

// className={styles.notesGroupColor}