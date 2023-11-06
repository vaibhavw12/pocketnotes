import React,{useState} from 'react'
import styles from './CreateNotes.module.css'
import {CreateGroup} from "./createGroup/CreateGroup"
import { EachGroup } from '../eachGroup/EachGroup';

export const CreateNotes = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handelGroup = ()=>{
        setIsModalOpen(true)
    }
    const handleCloseCreateGroup = ()=>{
        setIsModalOpen(false)
    }
    let [active, setActive] = useState(false)
    let [clickId, setClickId] = useState(null)
    const handleGroupClick = (gName,gId)=>{
        props.setDisplay(false)
        props.setGName(gName)
        props.setGId(gId)
        setActive(true)
        setClickId(gId)
    }
    const divStyle = {
        backgroundColor: "rgba(247, 236, 220, 1)",
        marginLeft : '2vw',
        borderTopLeftRadius: '2rem',
        borderBottomLeftRadius: '2rem',
    }
    const groups = JSON.parse(localStorage.getItem("groups"))
  return (
    <div className={styles.createNotesCard}>
        <header className={styles.appName}>
            Pocket Notes
        </header>
        <section className={styles.createSection}>
            <button className={styles.createNotesGroupBtn} onClick={handelGroup}><span> + </span> Create Notes group</button>
            </section>
            {isModalOpen && (<CreateGroup onClose={handleCloseCreateGroup}></CreateGroup>)}
            <div className={styles.createNoteGroups}>
               {groups && groups.map((group)=>(
                    <div style={active && group.id === clickId ? divStyle : {}} key={group.id} >
                        <EachGroup onGroupClick={handleGroupClick} id={group.id} groupName={group.group} colorName={group.color}></EachGroup>
                    </div>
               ))}
            </div>
    </div>
  )
}
