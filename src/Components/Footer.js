import { Typography , Grid, Paper, Link, } from "@mui/material";
import Container from "@mui/material/Container";
import {useState} from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";


function CardInfo(props) {
    return  <Paper elevation={0} sx={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px", backgroundColor:"black"}}>
                <Link href={props.linkURL} underline="none" target="_blank">
                    <img src={props.imgUrl} style={{backgroundColor:"black"}} height="50px" width="50px" alt={props.linkName}></img>
                </Link>
            </Paper>
}

function CardRow(){
    const [gmail, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }


    return <Grid id="_contactSection" container justifyContent="center" sx={{paddingBottom: "20px"}}>
                <IconButton>
                    <Paper onClick={handleOpen} elevation={0} sx={{ marginTop: "5px", marginLeft: "10px", marginRight: "10px", backgroundColor:"black"}}>
                        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-1024.png" style={{backgroundColor:"black"}} height="45px" width="45px" alt={"Gmail"}></img>
                    </Paper>
                </IconButton>

                <Dialog onClose={handleClose} open={gmail}>
                    <DialogTitle>
                        Gmail:
                    </DialogTitle>
                    <DialogContent>
                        joycezhang2065@gmail.com
                    </DialogContent>
                </Dialog>

                <CardInfo
                    imgUrl="img/icons/GitHub.png"
                    linkURL="https://github.com/JZBlank"
                    linkName="GitHub">
                </CardInfo>
                
                <CardInfo 
                    imgUrl="img/icons/LinkedIn.png"
                    linkURL="https://www.linkedin.com/in/joyce-zhang-/"
                    linkName="LinkedIn"
>
                </CardInfo>
            </Grid>
}

export default function Footer(){

    return <div>
        <Container maxWidth style={{background:"black", height:"220px"}}>
            <Typography style={{color:"white", textAlign:"center", paddingTop: "50px"}}>Find me on</Typography>
            <CardRow></CardRow>
            <Container maxWidth style={{borderTop:"1px solid gray", height:"10px"}}>
                <Typography style={{color:"white", textAlign:"center", paddingTop: "20px"}}>© JOYCE ZHANG 2023</Typography>
            </Container>
        </Container>
    </div>
}