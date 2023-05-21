
import { getDatabase, ref, onValue} from "firebase/database";
import { Context } from "../../indexData";
import {  useContext, useEffect, useState} from "react";


export default function useChat(Scroll,mainUseEffectTrigger){
    const [chatData,setChatData]=useState();
    const {firebaseApp}=useContext(Context);

    const starCountRef = ref(getDatabase(firebaseApp), 'messages/');

    const updateMessages=()=>{
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
            data[data.length-1]['last']=true;
            setChatData(data);
            scroller();
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

        useEffect(()=>{
            bodyChat();
            },[mainUseEffectTrigger])

        useEffect(()=>{
            scroller();
        },[chatData])
    

    return {chatData};
}