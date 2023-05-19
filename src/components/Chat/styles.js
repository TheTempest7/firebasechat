export const styles ={
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
    wrapper:{
        display:'flex',flexDirection:'column',
        alignItems:'center',maxWidth:'100vw'
    },
    btnWrapper:{
        display:'flex',width:'100vw',justifyContent:'flex-end'
    },
    btn:{
        marginRight:'5vw',marginTop:'2vh',marginBottom:'2vh',
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