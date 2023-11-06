import React from 'react'
import styles from './EachGroup.module.css'

export const EachGroup = (props) => {
    let color = props.colorName
    // console.log(color)
    const divStyle = {
      backgroundColor: color, // Use the color prop to set the background color
      height: '3rem',
      width: '3rem',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    
    const closeHome = (gName,gId)=>{
        props.onGroupClick(gName,gId)
    }
  return (
    
    <div onClick={() => closeHome(props.groupName,props.id)} className={styles.eachGroup}>
        <div style={divStyle} ><span className={styles.eachGroupColor} >{props.groupName[0]+props.groupName[1]}</span></div>
        <div className={styles.eachGroupName}>{props.groupName}</div>
    </div>
  )
}
// className={styles.eachGroupColor}
