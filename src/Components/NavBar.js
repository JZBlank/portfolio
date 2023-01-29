import react from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function NavbarText(props){
    return <Link 
                href={props.move}
                fontSize="20px" 
                underline="none" 
                sx={{
                    color: props.wordColor,  
                    marginLeft: '20px',    
                    '&:hover':{
                        transition: '0.3s',
                        borderBottom: props.wordUnderline
                    }
                }}>
                    {props.word}
            </Link>
}


export default function NavBar(){
    return <div>
        <AppBar elevation={0} sx={{bgcolor: 'rgba(255, 255, 255, 255)'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>
                    <NavbarText word="Joyce Zhang" wordColor="#797EF6" wordUnderline= "0px solid #4ADEDE"></NavbarText>
                </Box>

                <NavbarText move="#_aboutSection" word="About" wordColor="#454545" wordUnderline= "3px solid #797EF6"></NavbarText>
                <NavbarText move="#_portfolioSection" word="Portfolio" wordColor="#454545" wordUnderline= "3px solid #4ADEDE"></NavbarText>
                <NavbarText move="#_contactSection" word="Contact" wordColor="#454545" wordUnderline= "3px solid #797EF6"></NavbarText>

            </Toolbar>
        </AppBar>
    </div>
}