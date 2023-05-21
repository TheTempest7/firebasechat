import { deepOrange } from "@mui/material/colors";
export const styles ={
    messageRow: {
        display: 'flex',
        flexWrap: 'wrap',
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
        borderTop: "15px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
        } 
    },
    messageBlueSM: {
        position: "relative",
        marginTop: '1px',
        marginLeft: "31px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#A8DDFD",
        width: "80%",
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
        borderTop: "15px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
        }
    },
    messageContent: { 
    position: 'relative',
    zIndex: 4,
    },
    messageTimeStampRight: {
        fontSize: ".85em",
        fontWeight: "300",
        marginTop: "10px",
        display: 'flex',
        justifyContent: 'end',
    },
    orange: {
        backgroundColor: deepOrange[500],
        color:'gold',
        width:'30px',
        height:'30px'
    },
    displayName: {
        marginLeft: '20px',
        flexBasis: '50%'
    }
};

export const stylesR ={
    messageRowRight: {
        display: "flex",
        justifyContent: "flex-end"
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
    messageOrangeSM:{
        position: "relative",
        marginRight: "20px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#f8e896",
        width: "80%",
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
        overflow: 'hidden'
    },
    messageTimeStampRight: {
        fontSize: ".85em",
        fontWeight: "300",
        marginTop: "10px",
        display: 'flex',
        justifyContent: 'end',
    },
    };