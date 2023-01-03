import { Hidden, Typography, Box } from '@mui/material'
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Opacity } from '@material-ui/icons';

function ProjectInfo(props){
    return <Grid xs={12} md={12}>
        <Container sx={{marginTop: '50px', height: '150px', border: '5px solid #797EF6', textAlign: 'left'}}>
            <Container sx={{marginTop: '5px', height: '130px', border: '5px solid red', textAlign: 'left'}}>
                <Grid container spacing={1}>
                    <Grid xs={12} md={3}>
                        <Container sx={{backgroundColor: '#4ADEDE', width: "100px", height: '100px', margin: '0'}}></Container>
                    </Grid>

                    <Grid xs={12} md={9}>
                        <Typography>{props.name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    </Grid>
        
        
}

function ProjectSoloGrid(){
    return <Grid container spacing={1} sx={{top:'20px'}}>
                <ProjectInfo
                    name="Cat Game"
                    imgLink="img/cat_game.png">
                </ProjectInfo>

                <ProjectInfo
                    name="Bikery"
                    imgLink="img/bike_website.png">
                </ProjectInfo>

            </Grid>
}



export default function Projects(){
    return <div id="_portfolioSection">
        <Typography sx={{width: '100%', marginTop: '100px', fontSize: '3vw', textAlign: 'center', position: 'relative'}}>Projects</Typography>
        <ProjectSoloGrid></ProjectSoloGrid>
        <Box height="100px"></Box>

    </div>
}