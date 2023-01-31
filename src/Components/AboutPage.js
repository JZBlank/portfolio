import react from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function AboutPage(){
    return <div>

        <Box id="_aboutSection" sx={{height: 100}}></Box> 

        <Grid container spacing= {2}>
            <Grid item xs={12} md={6} xl={5}>
                <Container
                    maxWidth="sm"
                    sx={"float:left"}>

                    <Typography inline color="#454545" gutterBottom style={{fontSize:"50px", width: "50%", marginLeft: 20}}>
                        About <b style={{color:"#797EF6"}}>Me</b>
                    </Typography>

                    <Typography inline color="#454545" style={{fontSize:"20px", marginLeft: 20}} >
                        I am a senior studying Computer Science at CUNY Hunter College. 
                        Currently, I am actively looking for an entry-level software engineer job.
                    </Typography>
                </Container>
            </Grid>

            <Grid item xs={12} md={5} xl={6}>
                <img src="img/laptop_decor.png" alt="Laptop"/>
            </Grid>
        </Grid>
    </div>
}