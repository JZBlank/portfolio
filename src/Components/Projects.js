import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid'; // Grid version 1



export default function Projects(){
    return <div id="_portfolioSection" >
        <Typography sx={{marginTop: '100px', fontSize: '3vw', textAlign: 'center'}}>Projects</Typography>

        <Grid container spacing={1} sx={{top:'100px', textAlign: 'center'}}>
            <Grid xs={12} md={6}>
                <Container  sx={{marginTop: '50px', height: '500px'}}>
                    <Container sx={{zIndex: 1, marginLeft: '5px', marginTop: '20px', width: '55%', height: '65%', border: '7px solid #797EF6'}}></Container>
                    <Container sx={{zIndex: 2, marginTop: '-250px', marginRight: '30px', width: '50%', height: '40%', bgcolor: '#4ADEDE'}}>
                        <Typography sx={{fontSize: '2vw', paddingTop: '50px',color: '#797EF6'}}>
                            Java Cat Game
                        </Typography>

                        <Container sx={{zIndex: 3, marginTop: '10px', width: '100px', height: '30px', bgcolor: '#FFFFFF', border: '3px solid #797EF6'}}>
                            <Typography sx={{color: '#797EF6'}}>
                                View
                            </Typography>
                    </Container>

                    </Container>
                </Container>
            </Grid>

            <Grid xs={12} md={6}>
                <Container  sx={{marginTop: '50px', height: '500px'}}>
                    <Container sx={{zIndex: 1, marginLeft: '5px', marginTop: '20px', width: '55%', height: '65%', border: '7px solid #797EF6'}}></Container>
                    <Container sx={{zIndex: 2, marginTop: '-250px', marginRight: '30px', width: '50%', height: '40%', bgcolor: '#4ADEDE'}}>
                        <Typography sx={{fontSize: '2vw', paddingTop: '50px',color: '#797EF6'}}>
                            Bikery Sales Website
                        </Typography>

                        <Container sx={{zIndex: 3, marginTop: '10px', width: '100px', height: '30px', bgcolor: '#FFFFFF', border: '3px solid #797EF6'}}>
                            <Typography sx={{color: '#797EF6'}}>
                                View
                            </Typography>
                        </Container>
                    </Container>
                </Container>
            </Grid>
        </Grid>
        

    </div>
}