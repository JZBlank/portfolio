import { Typography, Container, TextField, Modal} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {useState, useRef, form} from "react";
import React from 'react';

import emailjs from '@emailjs/browser';
import { Email } from '@material-ui/icons';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function FormModal(){
  return <Modal>
    Modal
  </Modal>
}

function EmailContactForm(){

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [modal, setModal] = useState("false");


    const form = useRef();

    const sendEmail = (event) => {
      
      event.preventDefault();
      if (name != "" && email != "" && message != ""){
        emailjs.sendForm("service_b6o836h", "template_xmvkzmd", form.current, "4veHQQ8afZTmc9OU5")
        .then((result) => {
           alert("Email was successfully sent. Thank you!")
           setModal("true");
            // show the user a success message
        }, (error) => {
            // show the user an error
        });
      }
      else{
        alert("Please fill out entire form.")
      }
    }

    return <Grid space={0} justifyContent= "center" sx={{paddingLeft: "25%", paddingRight: "25%", paddingBottom: "10%"}}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid sm={12} md={12} >
                    <Typography float="left" width="fit-content">Name *</Typography>
                    <TextField fullWidth id="outlined-basic" variant="outlined" multiline={false} rows={1} size="small" 
                          name="from_name" value={name} onChange={(e) => setName(e.target.value)}></TextField>
              </Grid>


              <Grid item sm={12} md={12}>
                  <Typography>Email *</Typography>
                  <TextField fullWidth id="outlined-basic" variant="outlined" multiline={false} rows={1} size="small" 
                        name="from_name" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
              </Grid>


              <Grid item sm={12} md={12}>
                  <Typography>Message * </Typography>
                  <TextField fullWidth id="outlined-basic" variant="outlined" multiline={true} rows={5} size="small" 
                        name="message" value={message} onChange={(e) => setMessage(e.target.value)}></TextField>
              </Grid>

              <Grid item sm={12} md={12} sx={{marginTop: "20px", textAlign: "right"}}>
                <Button variant="contained" type="submit" size="big">Send</Button>
              </Grid>
            
            </form>

          </Grid>
}


export default function Contact(){
    return <div>
        <Typography sx={{fontSize: '25px', textAlign: 'center', paddingBottom:"30px"}}>Let's Connect!</Typography>
        <EmailContactForm></EmailContactForm>
    </div>
}
