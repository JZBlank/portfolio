import { Hidden, Typography, Box } from '@mui/material'
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

function ProjectSoloGrid(){
    return <Grid container spacing={1} sx={{top:'20px', textAlign: 'center', position: 'absolute'}}>
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

function ProjectGroupGrid(){
    return <Grid container spacing={1} sx={{ textAlign: 'center', position: 'absolute'}}>
            <ProjectInfo
                name=""
                imgLink="img/laptop_decor.png">
            </ProjectInfo>

            <ProjectInfo
                name="test"
                imgLink="img/laptop_decor.png">
            </ProjectInfo>

        </Grid>
}


export default function Projects(){
    return <div id="_portfolioSection">
        <Typography sx={{width: '100%', marginTop: '100px', fontSize: '3vw', textAlign: 'center', position: 'relative'}}>Projects</Typography>
        <ProjectSoloGrid></ProjectSoloGrid>
        <ProjectGroupGrid></ProjectGroupGrid>
        <Box height="100px"></Box>

    </div>
}