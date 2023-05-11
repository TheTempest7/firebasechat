import React from 'react'
import {  Button, TextField  } from '@mui/material';
import { useState} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { UpdateData, updateDoc } from 'firebase/firestore';
import { getDatabase, ref,child, set,push,get} from "firebase/database";
import { doc, onSnapshot } from "firebase/firestore";
import date from 'date-and-time';
import moment from 'moment/moment';

// const usersRef = ref.child('users');
// const hopperRef = usersRef.child('gracehop');
// hopperRef.update({
//   'nickname': 'Amazing Grace'
// });\
// const unsub = onSnapshot(doc(db, "messages", "auth.currentUser.uid"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
export const TextInput = ({auth,firebaseApp,db}) => {
    const [messages,loading]=useCollection();
    const [input,setInput]=useState([]);
    const styles = 
{
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        color:'black'
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        padding:'15px 40px',
        margin:'10px 0'
    },
    }
    const sender=()=>{
            const dbRef = ref(getDatabase(firebaseApp));
            get(child(ref(getDatabase(firebaseApp)), `messages`)).then((snapshot) => {
                let us=snapshot.val();
                if(typeof us==='string'){
                    us=[];
                }
                let currUse=auth.currentUser.uid;
                us.push({
                        name:auth.currentUser.displayName,
                        message:input,
                        id:currUse,
                        time:{
                            year:moment().format('YY'),
                            month:moment().format('MMM'),
                            day:moment().format('DD'),
                            hour:moment().format('HH'),
                            minute:moment().format('mm')
                        }
                    });
                const refer=ref(getDatabase(firebaseApp),'messages/');
                set(refer, us);
            }).catch((error) => {
                console.error(error);
            });
        setInput('');
    }

    return (
        <>
            <form sx={styles.wrapForm}  noValidate autoComplete="off">
            <TextField  value={input} onChange={(e)=>{setInput(e.target.value)}}
                id="standard-text"
                label="Tapping"
                sx={styles.wrapText}
                //margin="normal"
            />
            <Button onClick={sender}  variant="contained" color="primary" sx={styles.button}>
                Send
            </Button>
            </form>
        </>
    )
}



