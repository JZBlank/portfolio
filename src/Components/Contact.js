import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';



export default function Contact(){
    return <div>
        <Typography sx={{fontSize: '3vw', textAlign: 'center'}}>Contact</Typography>

        <Grid container sx={{textAlign: 'center'}}>
            <Grid sm={12} md={4} sx={{padding: '20px'}}>
                <Paper elevation={3}>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" height="50px" width="50px"></img>
                    <Typography sx={{padding: '10px'}}>joycezhang2065@gmail.com</Typography>
                </Paper>
            </Grid>

            <Grid sm={12} md={4} sx={{padding: '20px'}}>
                <Paper elevation={3}>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-1024.png" height="50px" width="50px"></img>
                    <Typography sx={{padding: '10px'}}>
                        <Link href="https://github.com/JZBlank" underline="none">GitHub</Link>
                    </Typography>
                </Paper>
            </Grid>

            <Grid sm={12} md={4} sx={{padding: '20px'}}>
                <Paper elevation={3} square={true}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-1024.png" height="50px" width="50px" padding="10px"></img>
                    <Typography sx={{padding: '10px'}}>
                        <Link href="https://www.linkedin.com/in/joyce-zhang-/" underline="none">LinkedIn</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>

    </div>
}