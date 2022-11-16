import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';

const skillInfo = 
    <div>
        <Container sx={{height: '100px', bgcolor: 'red'}}>
            <Container sx={{margin: 'auto', padding: '10px', top: '60px', height:'20px', width: '40px', bgcolor: 'blue' }}>
                <Typography sx={{top: '100px', textAlign: 'center'}}>Test</Typography>
            </Container>
        </Container>

    </div>;

export default function Skills(){
    return <div>
        <Grid container spacing= {2} position= 'relative' sx={{top:'200px'}}>
            <Grid xs={12} md={4}>
                {skillInfo}
            </Grid>

            <Grid xs={12} md={4}>
                {skillInfo}
            </Grid>

            <Grid xs={12} md={4}>
                {skillInfo}
            </Grid>

        </Grid>
    </div>
}