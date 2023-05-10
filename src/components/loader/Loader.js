import { Container,Grid } from "@mui/material";
import './Loader.css';
const Loader=()=>{
    return(
        <Container>
            <Grid container style={{display:'flex',justifyContent:'center'}}>
                <Grid>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader;