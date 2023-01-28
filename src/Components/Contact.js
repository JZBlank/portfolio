import { Typography, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {useState} from "react";
import React from 'react';

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

function ContactTextFields(props){
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return <Grid item sm={12} md={props.width} sx={{padding:"10px"}}>
                <Typography>{props.text}</Typography>
                <TextField fullWidth id="outlined-basic" variant="outlined" multiline={props.mssg} rows={props.lineNum} size="small"></TextField>
            </Grid>
}

function AllTextFields(){
    return <Grid container space={1} justifyContent= "center" margin="center" sx={{paddingLeft: "100px", paddingRight: "100px"}}>
                <ContactTextFields fieldName="firstname" text="First Name" mssg="False" lineNum="1" width="6"></ContactTextFields>
                <ContactTextFields fieldName="lastname" text="Last Name" mssg="False" lineNum="1" width="6"></ContactTextFields>
                <ContactTextFields fieldName="email"text="Email" mssg="False" lineNum="1" width="12"></ContactTextFields>
                <ContactTextFields text="Message" mssg="True" lineNum="5" width="12"></ContactTextFields>
            </Grid>



}

function SendEmail() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }

export default function Contact(){
    return <div>
        <Typography sx={{fontSize: '3vw', textAlign: 'center', paddingBottom:"30px"}}>Contact Me</Typography>
        <AllTextFields></AllTextFields>
        <SendEmail></SendEmail>
        <CardRow></CardRow>
    </div>
}
