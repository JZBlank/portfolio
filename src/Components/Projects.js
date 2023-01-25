import { Hidden, Typography, Box, colors } from '@mui/material'
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Opacity } from '@material-ui/icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


function ProjectInfo(props){
      return <Card sx={{ maxWidth: 345, margin: '10px' }}>
          <CardMedia/>
          <img src={props.imgLink} alt={props.name} style={{height: '190px', objectFit:"fit", justifyContent: 'center'}}/>
          <CardContent style={{backgroundColor:"#797EF6"}}>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions style={{backgroundColor:"#797EF6", height:"50px"}}>
          <Link href= {props.link1} underline="none" target="_blank">
            <Button style={{backgroundColor:"#4ADEDE"}} variant="contained" size="small">
                <Typography color="white">{props.button1}</Typography>
            </Button>
            </Link>

            <Link href={props.link1} underline="none" target="_blank">
                <Button size="small" style={{marginLeft: "10px"}}>
                    <Typography color="white">Learn More</Typography>
                </Button>
            </Link>
          </CardActions>
        </Card>
}

function ProjectSoloGrid(){
    return <Grid container spacing={1} sx={{marginTop: '50px', justifyContent: 'center'}}>
                <ProjectInfo
                    name="Cat Game"
                    imgLink="img/java_game.png"
                    description="2D Cat Game"
                    button1="View Code"
                    link1="https://github.com/JZBlank/My2DGame">
                </ProjectInfo>

                <ProjectInfo
                    name="Bikery"
                    imgLink="img/bike_website.png"
                    description="Bikery is a fully responsive website."
                    button1="Visit Website"
                    link1="https://jzblank.github.io/microcredential/project2_Zhang/project2.html">
                </ProjectInfo>

                <ProjectInfo
                    name="Climate Change"
                    imgLink="img/climate_website.png"
                    description="Climate change website"
                    button1="Visit Website"
                    link1="https://jzblank.github.io/microcredential/project1_Zhang/project1.html">
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