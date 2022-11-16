import react from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function NavBar(){
    return <div>
        <AppBar  elevation={0} sx={{bgcolor: 'rgba(255, 255, 255, 255)'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>
                    <Link href="#" fontSize="2vw" underline="none" sx={{ color: "#797EF6", marginLeft: '20px', fontWeight: '500'}}>
                        Joyce Zhang
                    </Link>
                </Box>

                <Link className="test" href="#" fontSize="2vw" underline="none" sx={{color: "#000000",  marginLeft: '20px',    
                    '&:hover':{
                        transition: '0.3s',
                        borderBottom: '3px solid #797EF6',
                    }
                }}>
                    About
                </Link>

                <Link href="#" fontSize="2vw" underline="none" sx={{color: "#000000",  marginLeft: '20px',
                    '&:hover':{
                        transition: '0.3s',
                        borderBottom: '3px solid #4ADEDE',
                    }
            
                }}>
                    Portfolio
                </Link>

                <Link href="#" fontSize="2vw" underline="none" sx={{color: "#000000",  marginLeft: '20px',
                    '&:hover':{
                        transition: '0.3s',
                        borderBottom: '3px solid #797EF6',
                    }
            
                }}>
                    Contact
                </Link>

            </Toolbar>
        </AppBar>
    </div>;
}