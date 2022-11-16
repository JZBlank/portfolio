import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';

const skillInfo = 
    <div>
        <Container sx={{height: '100px', bgcolor: 'red'}}>
            <Typography sx={{top: '100px'}}>Test</Typography>
        </Container>

    </div>;

export default function Skills(){
    return <div>
        <Grid container spacing= {2} position= 'relative' sx={{top:'200px'}}>
            <Grid xs={1} md={4}>
                {skillInfo}
            </Grid>

            <Grid xs={1} md={4}>
                {skillInfo}
            </Grid>

            <Grid xs={1} md={4}>
                {skillInfo}
            </Grid>

        </Grid>
    </div>
}