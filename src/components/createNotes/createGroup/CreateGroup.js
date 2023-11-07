import React, { useState, useEffect, useRef} from 'react'
import styles from './CreateGroup.module.css'

export const CreateGroup = (props) => {

    let[groupName, setGroupName] = useState('')
    let[colorName, setColorName] = useState('')
    let[btn, setBtn] = useState(null)
    let[error, setError] = useState('')
    const submitGroupInfo = ()=>{
      if(groupName.length < 2 || colorName.length === 0){
        setError("* group name and color is required")
        return
      }
      setError('')
      // console.log(groupName)
      // console.log(colorName)
      // Step 1: Retrieve the existing array from local storage
      const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
      // storedGroups[0].newField = "new value"
      // localStorage.setItem("groups", JSON.stringify(storedGroups));
      // Step 2: Update the array by adding a new group (object) to it
      const newGroup = {
        id : storedGroups.length,
        group: groupName,
        color: colorName,
        notes : []
      };
      storedGroups.push(newGroup);

      // Step 3: Save the updated array back to local storage
      localStorage.setItem("groups", JSON.stringify(storedGroups));
      props.onClose()  // calling function in parent component to close this component block
    }
    
    const changeHandler = (e)=>{
      setGroupName(e.target.value)
    }
    function color(value,btn){
      setColorName(value)
      setBtn(btn)
    }

    const divRef = useRef(null);
    const [isInsideDiv, setIsInsideDiv] = useState(false);
    useEffect(() => {
      const handleClick = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
          // The click is outside the div
          setIsInsideDiv(false);
          props.onClose();
        } else {
          setIsInsideDiv(true);
        }
      };
    
      document.addEventListener('mousedown', handleClick);
    
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [props]);

    if(isInsideDiv){
      // dummy code
    }
  
  return (
    <div>
        <section  className={styles.createNewGroupSection}>
          <div ref={divRef} className={styles.createNewGroupReq}><br />
            <span className={styles.createNewGroupSectionHeading}>Create New Notes Group</span><br /><br />
            <div style={{display:'flex'}}>
              <span className={styles.createNewGroupSectionGroupName}>Group Name</span>
              <input onChange={changeHandler} value={groupName} type='text' placeholder='Enter your group name....'></input>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <span className={styles.createNewGroupSectionChooseColor}>Choose color</span>
              <div className={styles.chooseGroupColor}>
                  <button style={btn === "btn1" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(179, 139, 250, 1)"}} onClick={()=>color("rgba(179, 139, 250, 1)","btn1")} className={styles.btn1}></button>
                  <button style={btn === "btn2" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(255, 121, 242, 1)"}} onClick={()=>color("rgba(255, 121, 242, 1)","btn2")} className={styles.btn2}></button>
                  <button style={btn === "btn3" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(67, 230, 252, 1)"}} onClick={()=>color("rgba(67, 230, 252, 1)","btn3")} className={styles.btn3}></button>
                  <button style={btn === "btn4" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(241, 149, 118, 1)"}} onClick={()=>color("rgba(241, 149, 118, 1)","btn4")} className={styles.btn4}></button>
                  <button style={btn === "btn5" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(0, 71, 255, 1)"}} onClick={()=>color("rgba(0, 71, 255, 1)","btn5")} className={styles.btn5}></button>
                  <button style={btn === "btn6" ? {border:'0.2rem black dashed'} : {backgroundColor:"rgba(102, 145, 255, 1)"}} onClick={()=>color("rgba(102, 145, 255, 1)","btn6")} className={styles.btn6}></button>
              </div>
            </div>
            
            <p className={styles.errorText}>{error}</p>
            <button onClick={submitGroupInfo} className={styles.createGroupBtn}>Create</button>
          </div>
        </section>
      </div>
  )
}
