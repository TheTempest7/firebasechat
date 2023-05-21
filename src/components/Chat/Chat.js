import React from "react";
import { useRef, useContext, useState} from "react";
import { Context } from "../../indexData.js";
import { Button ,Box,  Paper,  Container,} from "@mui/material";
import { signOut } from "firebase/auth";
import { TextInput } from "../TextInput/TextInput.js";
import { MessageLeft, MessageRight } from "../Message/Message";
import { motion } from "framer-motion";
import {styles} from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useChat from "./useChat";

const Chat= ()=>{
  const [mainUseEffectTrigger,setThisTrigger]=useState(0);
  const Scroll=useRef();

  const {chatData}=useChat(Scroll,mainUseEffectTrigger);

  const middle = useMediaQuery('(max-width:480px) and (min-width:360px)');
  const extraSmall=useMediaQuery('(max-width:359px)');

  const {auth}=useContext(Context);



  const out=()=>{
    signOut(auth)
  }

  return (
    <motion.div  
    initial={{opacity:0,translateX:'400px',transition:{duration:1}}} 
    animate={{opacity:1,translateX:'0px',transition:{duration:1}}} 
    exit={{opacity:0,translateX:'-400px',transition:{duration:1}}} >
      <Container  sx={styles.wrapper}>
        <Box sx={styles.btnWrapper}>
          <Button variant="outlined" sx={styles.btn} onClick={out}>
            Log out
          </Button>
        </Box>
        <div sx={styles.container}>
          <Paper 
          sx={!middle&&!extraSmall?styles.paper: middle&&!extraSmall?styles.paperSM:styles.paperXS} 
            zdepth={2}>
              <Paper id="style-1" 
              sx={
                !middle&&!extraSmall
                ?
                styles.messagesBody
                :
                middle&&!extraSmall
                ?
                styles.messagesBodySM:styles.messagesBodyXS}>
                {chatData?.map((i,index)=>{
                if(i.last===true && auth.currentUser.uid && i.id===auth.currentUser.uid){
                return <div ref={Scroll}  key={index} > 
                          <MessageRight
                          message={i.message} 
                          timestamp={i.time} 
                          photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                          displayName={i.name}
                          avatarDisp={true}/> 
                        </div>}
                else if(i.last===true  && i.id!==auth.currentUser.uid){
                return <div ref={Scroll} key={index} > 
                          <MessageLeft 
                            message={i.message}
                            timestamp={i.time}
                            name={i.name}
                            photoURL=""
                            displayName={i.name}
                            avatarDisp={true}/>
                        </div>}
                else if(auth.currentUser.uid && i.id===auth.currentUser.uid){
                return <MessageRight  key={index}
                        message={i.message}
                        timestamp={i.time}
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName={i.name}
                        avatarDisp={true}/>}
                else{ 
                  return <MessageLeft key={index}
                          message={i.message}
                          timestamp={i.time}
                          name={i.name}
                          photoURL=""
                          displayName={i.name}
                          avatarDisp={true}/>}
                        })
                    }
              </Paper>
              <TextInput auth={auth}  setThisTriger={setThisTrigger}/>
          </Paper>
        </div>
      </Container>
    </motion.div>
)
}

export default Chat;
