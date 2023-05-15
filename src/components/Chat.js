import React from "react";
import { useRef, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { Context } from "..";
import { Button ,Box,  Paper, Grid, Container,} from "@mui/material";
import { signOut } from "firebase/auth";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import { getDatabase, ref,child, set,push,get, onValue} from "firebase/database";
import { doc, onSnapshot } from "firebase/firestore";
import * as functions from 'firebase/functions';
import { type } from "@testing-library/user-event/dist/type";
import { motion } from "framer-motion";

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase



const Chat= ()=>{
  const [mainUseEffectTrigger,setThisTrigger]=useState(0);
  const [firtsScroll,setFirstScroll]=useState(false);
  const {auth,db,firebaseApp}=useContext(Context);
  const [chatData,setChatData]=useState();
  const [user,setUser]=useState(true);
  const [curtain,setCurtain]=useState(false);
  const starCountRef = ref(getDatabase(firebaseApp), 'messages/');
  const Scroll=useRef();
  const donotScroll=useRef();


  const updateMessages=()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      data[data.length-1]['last']=true;
      setChatData(data);
    });

  }
  const scroller=()=>{ 
    if(Scroll.current){
      Scroll.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      setFirstScroll(true);
    }

  }

  const bodyChat= async()=>{
    console.log('working');
    await updateMessages();
    setTimeout(()=>{scroller();},1000);

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
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
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
      }
    }
  };

  const navigate = useNavigate();
  const out=async ()=>{
    signOut(auth)
    .then(()=>{
      setCurtain(false);
      setUser(false);
    })
  }
  useEffect(()=>{
  bodyChat();
  },[mainUseEffectTrigger])
  
  useEffect(()=>{
    scroller();
  },[firtsScroll])
  useEffect(()=>{
    setFirstScroll(true);
  })

  return (
    <motion.div className="page" 
    initial={{opacity:0,translateX:'400px',transition:{duration:1}}} 
    animate={{opacity:1,translateX:'0px',transition:{duration:1}}} 
    exit={{opacity:0,translateX:'-400px',transition:{duration:1}}} >
    <Container  maxWidth="xl" sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Box sx={{display:'flex',width:'100vw',justifyContent:'flex-end'}}>
      <Button variant="outlined" sx={{marginRight:'5vw',marginTop:'2vh',marginBottom:'2vh'}} onClick={out} >Log out</Button>
    </Box>
    <div sx={styles.container}>
        <Paper sx={styles.paper} zdepth={2}>
          <Paper id="style-1" sx={styles.messagesBody}>
            {chatData?.map((i,index)=>{
              if(i.last===true && auth.currentUser.uid && i.id===auth.currentUser.uid){
              return <div ref={Scroll}  key={index} > 
              <MessageRight 
              message={i.message}
              timestamp={i.time}
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName={i.name}
              avatarDisp={true}/> </div>
                                }
              else if(i.last===true  && i.id!==auth.currentUser.uid){
                return <div ref={Scroll} key={index} > <MessageLeft 
                message={i.message}
                timestamp={i.time}
                name={i.name}
                photoURL=""
                displayName={i.name}
                avatarDisp={true}
              />
              </div>
              }
              else if(auth.currentUser.uid && i.id===auth.currentUser.uid){
                return <MessageRight key={index}
                message={i.message}
                timestamp={i.time}
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName={i.name}
                avatarDisp={true}/>
              }
              else{
                return   <MessageLeft key={index}
                message={i.message}
                timestamp={i.time}
                name={i.name}
                photoURL=""
                displayName={i.name}
                avatarDisp={true}
              />
              }
            })
            }
          </Paper>
          <TextInput auth={auth} triger={mainUseEffectTrigger} setTriger={setThisTrigger} db={db}  />
        </Paper>
    </div>
    </Container>
    </motion.div>
)
}

export default Chat;
