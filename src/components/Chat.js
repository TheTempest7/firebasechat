import React from "react";
import { useRef, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { Context } from "..";
import { Button ,Box,  Paper,} from "@mui/material";
import { signOut } from "firebase/auth";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import { getDatabase, ref,child, set,push,get, onValue} from "firebase/database";
import { doc, onSnapshot } from "firebase/firestore";
import * as functions from 'firebase/functions';
import { type } from "@testing-library/user-event/dist/type";

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase



const Chat= React.memo(()=>{
  const {auth,db,firebaseApp}=useContext(Context);
  const [chatData,setChatData]=useState();
  const [user,setUser]=useState(true);
  const [curtain,setCurtain]=useState(false);
  const starCountRef = ref(getDatabase(firebaseApp), 'messages/');
  const Scroll=useRef();
  const donotScroll=useRef();

  function control(){
    if(!auth.currentUser){
      navigate('/login');
    }
    else{
      setCurtain(true);
    }
  }
  const updateMessages=()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      data[data.length-1]['last']=true;
      console.log('asdasdsd');
      console.log(data);
      setChatData(data);
    });

  }
  const scroller=()=>{
    if(Scroll.current){
      Scroll.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
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
  console.log(user);
  const out=async ()=>{
    signOut(auth)
    .then(()=>{
      setCurtain(false);
      setUser(false);
    })
  }


  useEffect(()=>{
    control();
    updateMessages();
  },[user])

  useEffect(()=>{
    if(!Scroll.current){
      Scroll.current=true;
    }
    else{
      setTimeout(()=>{scroller()},500)
    }
  })
  return (
    curtain
    ?
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Button onClick={out} >Log out</Button>
    <div onClick={()=>{console.log(chatData);}}>Chat</div> 
    <div sx={styles.container}>
        <Paper sx={styles.paper} zdepth={2}>
          <Paper id="style-1" sx={styles.messagesBody}>
            {chatData?.map((i,index)=>{
              if(i.last===true && auth.currentUser.uid && i.id===auth.currentUser.uid){
              console.log('last');
              return <div ref={Scroll}  key={index} > <MessageRight 
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
          <TextInput auth={auth}  db={db}  />
        </Paper>
    </div>
    </Box>
    : 
   <></>
)
})

export default Chat;
