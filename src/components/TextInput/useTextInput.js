import { useState } from "react";
import { getDatabase, ref, set,get} from "firebase/database";
import moment from 'moment/moment';


export default function useTextInput(auth,firebaseApp,setThisTriger){
    const [input,setInput]=useState('');

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
const refer=ref(getDatabase(firebaseApp),'messages/');
const upLoader=()=>{
    get(refer).then((snapshot) => {
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
        set(refer, us);
    }).catch((error) => {
        console.error(error);
    });
    setInput('');
    setThisTriger((prev)=>prev+1);
}
return  {input,setInput,upLoader}
}

