import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';

export default function Skills(){
    return <div>
        <Grid container spacing= {2} position= 'relative' sx={{top:'100px'}}>
            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Programming Languages</Typography>
                    </Container>

                    <Container sx={{top: '10px', height: '0.1px', width: '35%', border: '3px solid #797EF6' }}></Container>

                </Container>
            </Grid>

            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Technologies and Tools</Typography>
                    </Container>

                    <Container sx={{top: '10px', height: '0.1px', width: '35%', border: '3px solid #797EF6' }}></Container>
                </Container>
            </Grid>

            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Web Development</Typography>
                    </Container>

                    <Container sx={{top: '10px', height: '0.1px', width: '35%', border: '3px solid #797EF6' }}></Container>
                </Container>
            </Grid>

        </Grid>
    </div>
}