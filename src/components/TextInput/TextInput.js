import React from 'react'
import {  Button, TextField  } from '@mui/material';
import { useState} from 'react';
import { getDatabase, ref,child, set,get} from "firebase/database";
import moment from 'moment/moment';


export const TextInput = ({auth,firebaseApp,setThisTriger}) => {
    const [input,setInput]=useState('');
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
    let validate='';
    const checkWhiteSpaceOnInput=(i)=>{
        let arr=i.split(' ');
        arr.forEach((el,i) => {
            let res;
            if(el.length>31){
                while(el.length>=31){
                    res?res=res+' '+el.slice(0,31)
                    : res=el.slice(0,31);
                    el=el.slice(31);
                    console.log(el.length);
                }
                arr.splice(i,1);
                arr.splice(i,0,res);
            }
        });
        i=arr.join(' ');
        validate=i;
    }
    const sender=(e)=>{
        if(!input){
            e.preventDefault();
        }
        else{
            get(child(ref(getDatabase(firebaseApp)), `messages`)).then((snapshot) => {
                let us=snapshot.val();
                if(typeof us==='string'){
                    us=[];
                }
                let currUse=auth.currentUser.uid;
                checkWhiteSpaceOnInput(input);
                us.push({
                        name:auth.currentUser.displayName,
                        message:validate,
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
        setThisTriger((prev)=>prev+1);
        }  
    }

    return (
        <>
            <form sx={styles.wrapForm}  noValidate autoComplete="off">
            <TextField  value={input} onChange={(e)=>{setInput(e.target.value)}}
                id="standard-text"
                label="Tapping"
                sx={styles.wrapText}
                multiline
                maxRows={4}
            />
            <Button onClick={(e)=>{sender(e)}}  variant="contained" color="primary" sx={styles.button}>
                Send
            </Button>
            </form>
        </>
    )
}



