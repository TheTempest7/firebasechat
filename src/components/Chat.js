import React from "react";
import { useRef, useContext, useEffect, useState} from "react";
import { Context } from "..";
import { Button ,Box,  Paper,  Container,} from "@mui/material";
import { signOut } from "firebase/auth";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import { getDatabase, ref, onValue} from "firebase/database";
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';


const Chat= ()=>{
  const [mainUseEffectTrigger,setThisTrigger]=useState(0);
  const middle = useMediaQuery('(max-width:480px) and (min-width:360px)');
  const extraSmall=useMediaQuery('(max-width:359px)');
  const {auth,firebaseApp}=useContext(Context);
  const [chatData,setChatData]=useState();
  const starCountRef = ref(getDatabase(firebaseApp), 'messages/');
  const Scroll=useRef();


  const updateMessages=()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if(data){
        data[data.length-1]['last']=true;
        setChatData(data);
      }
    });
  }

  const scroller=()=>{ 
    if(Scroll.current){
      Scroll.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  const bodyChat= async()=>{
    await updateMessages();
    setTimeout(()=>{scroller();},2000);
  }

  const styles ={
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paperSM: {
      width: "90vw",
      height: "80vh",
      paddingTop:'3vh',
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paperXS: {
      width: "100vw",
      height: "80vh",
      paddingTop:'3vh',
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      overflowX: "hidden",
      height: "calc( 100% - 80px )",
      "::-webkit-scrollbar-thumb":{
        background: '#6B7786',
        borderRadius: '100px'
      },
    },
    messagesBodySM: {
      width: "calc( 100% - 20px )",
      marginBottom:'3vh',
      overflowY: "scroll",
      overflowX: "hidden",
      height: "calc( 100% - 20px )",
      "::-webkit-scrollbar-thumb":{
        background: '#6B7786',
        borderRadius: '100px'
      },
    },
     messagesBodyXS: {
      width: "calc( 100% - 20px )",
      marginBottom:'3vh',
      overflowY: "scroll",
      overflowX: "hidden",
      height: "calc( 100% - 20px )",
      "::-webkit-scrollbar-thumb":{
        background: '#6B7786',
        borderRadius: '100px'
      },
    }
  };

  const out=()=>{
    signOut(auth)
  }
  useEffect(()=>{
  bodyChat();
  },[mainUseEffectTrigger])

  return (
    <motion.div  
    initial={{opacity:0,translateX:'400px',transition:{duration:1}}} 
    animate={{opacity:1,translateX:'0px',transition:{duration:1}}} 
    exit={{opacity:0,translateX:'-400px',transition:{duration:1}}} >
      <Container  maxWidth="xl" sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Box sx={{display:'flex',width:'100vw',justifyContent:'flex-end'}}>
          <Button variant="outlined" sx={{marginRight:'5vw',marginTop:'2vh',marginBottom:'2vh'}} onClick={out}>
            Log out
          </Button>
        </Box>
        <div sx={styles.container}>
          <Paper sx={!middle&&!extraSmall?styles.paper: middle&&!extraSmall?styles.paperSM:styles.paperXS} 
            zdepth={2}>
              <Paper id="style-1" sx={!middle&&!extraSmall?styles.messagesBody:middle&&!extraSmall?styles.messagesBodySM:styles.messagesBodyXS}>
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
              <TextInput auth={auth} triger={mainUseEffectTrigger} setThisTriger={setThisTrigger}/>
          </Paper>
        </div>
      </Container>
    </motion.div>
)
}

export default Chat;
