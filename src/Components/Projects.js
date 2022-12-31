import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid'; // Grid version 1

function ProjectInfo(props){
    return <Grid xs={12} md={6}>
            <Container sx={{marginTop: '50px', height: '400px'}}>
                <img src={props.imgLink} width="100%" height="90%" 
                    sx={{
                        "&:hover":{
                            transition: '0.3s',
                            opacity: 1
                        }
                    }}></img>
            </Container>
        </Grid>
}

function ProjectGrid(){
    return <Grid container spacing={1} sx={{top:'100px', textAlign: 'center'}}>
                <ProjectInfo
                    name=""
                    imgLink="img/cat_game.png">
                </ProjectInfo>

                <ProjectInfo
                    name="test"
                    imgLink="img/bike_website.png">
                </ProjectInfo>

            </Grid>
}


export default function Projects(){
    return <div id="_portfolioSection" >
        <Typography sx={{marginTop: '100px', fontSize: '3vw', textAlign: 'center'}}>Projects</Typography>
        <ProjectGrid></ProjectGrid>

    </div>
}