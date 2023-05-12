import React from "react";
import { Avatar,Box } from '@mui/material';
import { deepOrange } from "@mui/material/colors";


//avatarが左にあるメッセージ（他人）
export const MessageLeft = (props) => {
  const styles =
{
    messageRow: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    messageBlue: {
      position: "relative",
      marginTop: '-7px',
      marginLeft: "45px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#A8DDFD",
      width: "70%",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&::after": {
        content: "''",
        position: "absolute",
        zIndex:1,
        width: "100px",
        height: "50px",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        zIndex:1,
        width: "100px",
        height: "50px",
        borderTop: "16px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#f8e896",
      width: "60%",
      height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&::after": {
        content: "''",
        position: "absolute",
        width: "100px",
        height: "50px",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&::before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },
    contentFather:{
      position:'relative',
      zIndex:3
    },
    messageContent: { 
    position: 'relative',
    zIndex: 4,
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "10px",
      bottom: "4px",
      right: "5px"
    },

    orange: {
      backgroundColor: deepOrange[500],
      color:'gold',
      width:'30px',
      height:'30px'
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width:'30px',
      height:'30px'
    },
    displayName: {
      marginLeft: '20px',
      flexBasis: '50%'
    }
  };
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.name ? props.name : "名無しさん";
  return (
      <Box sx={styles.messageRow}>
        <Avatar
          alt={displayName}
          sx={styles.orange}
          src={photoURL}/>

          <Box sx={styles.displayName}>{displayName}</Box>
          <Box sx={styles.messageBlue}>
            <Box sx={styles.messageContent}>{message}</Box>
            <Box sx={styles.messageTimeStampRight}>
              {timestamp 
              ? 
              timestamp.hour+':'+timestamp.minute+'  '+timestamp.day+' '+timestamp.month
              : <></>
              }
            </Box>
        </Box>
      </Box>
  );
};
//avatarが右にあるメッセージ（自分）
export const MessageRight = (props) => {
  const styles =
{
    messageRow: {
      display: "flex",
      backgroundColor:'navy'
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#A8DDFD",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#f8e896",
      width: "70%",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },

    messageContent: {
      padding: 0,
      margin: 0,
      width: 'inherit',
      overflow: 'hidden'
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "10px",
      bottom: "4px",
      right: "5px"
    },

    orange: {
      backgroundColor: deepOrange[500],
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
    },
    displayName: {
      marginLeft: "20px"
    }
  };
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <Box sx={styles.messageRowRight}>
      <Box sx={styles.messageOrange}>
        <Box sx={styles.messageContent}>{message}</Box>
        <Box sx={styles.messageTimeStampRight}>
        {timestamp.hour+':'+timestamp.minute+' '+timestamp.day+' '+timestamp.month}
        </Box>
      </Box>
    </Box>
  );
};
