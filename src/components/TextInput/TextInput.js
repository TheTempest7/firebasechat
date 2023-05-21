import React from 'react'
import {  Button, TextField  } from '@mui/material';
import {styles} from './styles';
import useTextInput from './useTextInput';


export const TextInput = ({auth,firebaseApp,setThisTriger}) => {

    const {input,setInput,upLoader}=useTextInput(auth,firebaseApp,setThisTriger);

    const sender=(e)=>{
        if(!input){
            e.preventDefault();
        }
        else{
            upLoader();
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



