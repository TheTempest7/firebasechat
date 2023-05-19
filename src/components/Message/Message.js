import React from "react";
import { Avatar,Box,} from '@mui/material';
import {styles,stylesR} from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const MessageLeft = (props) => {
  const {message="no message",timestamp = '',photoURL ="dummy.js",displayName="名無しさん" }=props;
  const matches = useMediaQuery('(min-width:480px)');
  return (
      <Box sx={styles.messageRow}>
        <Avatar
          alt={displayName}
          sx={styles.orange}
          src={photoURL}/>
          <Box sx={styles.displayName}>{displayName}</Box>
          <Box sx={matches?styles.messageBlue:styles.messageBlueSM}>
            <Box sx={styles.messageContent}>{message}</Box>
            <Box  sx={styles.messageTimeStampRight} >
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

export const MessageRight = (props) => {
  const {message ="no message",timestamp ="" }=props;
  const matches = useMediaQuery('(min-width:480px)');
  return (
    <Box sx={stylesR.messageRowRight}>
      <Box  sx={matches?stylesR.messageOrange:stylesR.messageOrangeSM}>
        <Box sx={stylesR.messageContent}>{message}</Box>
        <Box sx={stylesR.messageTimeStampRight}>
        {timestamp.hour+':'+timestamp.minute+' '+timestamp.day+' '+timestamp.month}
        </Box>
      </Box>
    </Box>
  );
};
