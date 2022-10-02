import react from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function NavBar(){
    return <div>
        <AppBar elevation={0} sx={{bgcolor: 'rgba(52, 52, 52, 0.0)'}}>
            <Toolbar>
                <Link href="#" variant="h6" underline="none" sx={{ color: "#797EF6", marginLeft: '20px'}}>
                    Joyce Zhang
                </Link>

                <Link href="#" variant="h6" underline="none" sx={{color: "#797EF6",  marginLeft: '20px'}}>
                    About
                </Link>

                <Link href="#" variant="h6" underline="none" sx={{color: "#797EF6",  marginLeft: '20px'}}>
                    Portfolio
                </Link>

                <Link href="#" variant="h6" underline="none" sx={{color: "#797EF6",  marginLeft: '20px'}}>
                    Contact
                </Link>
            </Toolbar>
        </AppBar>
    </div>;
}