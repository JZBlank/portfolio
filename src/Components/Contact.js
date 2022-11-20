import { Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function CardInfo(props) {
    return <Grid item sm={12} md={4} sx={{textAlign: props.position}}>
                <Paper elevation={0} sx={{ marginLeft: "50px", marginRight: "50px"}}>
                    <Link href={props.linkURL} underline="none" target="_blank">
                        <img src={props.imgUrl} height="95px" width="95px" alt={props.linkName}></img>
                    </Link>
                </Paper>
            </Grid>
}

function CardRow(){
    return <Grid id="_contactSection" container sx={{marginTop: '50px', paddingBottom: '50px'}}>
                <CardInfo
                    imgUrl="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                    linkURL="mailto:joycezhang2065@gmail.com"
                    linkName="Email"
                    position="right">
                </CardInfo>

                <CardInfo 
                    imgUrl="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-1024.png"
                    linkURL="https://github.com/JZBlank"
                    linkName="GitHub"
                    position="center">
                </CardInfo>

                <CardInfo 
                    imgUrl="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-1024.png"
                    linkURL="https://www.linkedin.com/in/joyce-zhang-/"
                    linkName="LinkedIn"
                    position="left">
                </CardInfo>
            </Grid>
}

export default function Contact(){
    return <div>
        <Typography sx={{fontSize: '3vw', textAlign: 'center'}}>Keep in Touch!</Typography>
        <CardRow></CardRow>
    </div>
}
