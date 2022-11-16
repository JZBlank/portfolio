import react from "react";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Fab from '@mui/material/Fab';


export default function WelcomePage(){
    return <div>
        <Grid container spacing= {2} style={{marginTop: '70px'}}>
            <Grid item xs={12} md={5} lg={5}>
                <img src="img/boxOutside.png" alt="box" width="90%" height="90%" style={{marginLeft: '100px'}}/>
            </Grid>
            
            <img src="img/decor_1.png" alt="box" width="15%" style={{marginTop: 0, position: 'absolute', right: 10, top: 0}}/>
            
            <Grid item xs={12} md={7} lg={5} style={{marginTop: '100px'}}>
                <Stack direction="column">
                    <Typography inline color="#454545" style={{fontSize:"80px"}} >
                        Hi I'm <b style={{color:"#797EF6"}}>Joyce,</b>
                    </Typography>
                    <Typography color="#454545" style={{fontSize:"36px", marginTop: '-20px'}} >
                        An aspiring <b style={{color:"#4ADEDE"}}>software engineer</b>
                    </Typography>
                    <Typography variant="h4" color="#454545" style={{fontSize:"36px", marginTop: '-10px'}} >
                        who loves thinking outside the box.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        

        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            marginTop="auto">
            <KeyboardDoubleArrowDownIcon 
             sx={{ color: 'gray', top: '20px', height: '50px', width: '50px', margin: 'auto'}}/>
            
        </Stack>
    </div>
}