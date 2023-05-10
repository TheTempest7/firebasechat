import React from "react";
import { useCallback, useContext, useEffect, useState} from "react";
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
  const starCountRef = ref(getDatabase(firebaseApp), 'messages/');

  const updateMessages=()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setChatData(data);
    });
  }
  const [input,setInput]=useState('');

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
      height: "calc( 100% - 80px )"
    }
  };

  const navigate = useNavigate();
  const [user,setUser]=useState(true);
  const [curtain,setCurtain]=useState(false);
  console.log(user);
  const out=()=>{
    signOut(auth)
    .then(()=>{setUser(false)})
  }
  function control(){
    if(!auth.currentUser){
      navigate('/login');
    }
    else{
      setCurtain(true);
    }
  }
  function getData(){
    const dbRef = ref(getDatabase(firebaseApp));
    get(child(ref(getDatabase(firebaseApp)), `messages`)).then((snapshot) => {
        if (snapshot.exists()) {
        let us=snapshot.val();
        let currUse=auth.currentUser.uid;
        console.log(us);
      } else {
        console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
    });
  }
  useEffect(()=>{
    control();
    updateMessages();
  },[user])
  return (
    curtain
    ?
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Button onClick={out} >Log out</Button>
    <div>Chat</div> 
    <div sx={styles.container}>
        <Paper sx={styles.paper} zdepth={2}>
          <Paper id="style-1" sx={styles.messagesBody}>
            {chatData?.map((i,index)=>{
              if(i.id===auth.currentUser.uid){
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
                timestamp="MM/DD 00:00"
                photoURL=""
                displayName={i.name}
                avatarDisp={false}
              />
              }
            })
            }
            {/* { (chatData && chatData[auth.currentUser.uid])
            ?
            chatData[auth.currentUser.uid].map((i,index)=><MessageRight key={index}
            message={i.message}
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}/>)
            :
            <div>empty</div>
            } */}
            {/* <MessageLeft
              message="あめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName=""
              avatarDisp={true}
            />
            <MessageLeft
              message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
              timestamp="MM/DD 00:00"
              photoURL=""
              displayName="テスト"
              avatarDisp={false}
            />
            <MessageRight
              message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="まさりぶ"
              avatarDisp={true}
            />
            <MessageRight
              message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="まさりぶ"
              avatarDisp={false}
            /> */}
          </Paper>
          <TextInput auth={auth} input={input} db={db} setInput={setInput}/>
        </Paper>
    </div>
    </Box>
    : 
   <></>
)
})

export default Chat;
