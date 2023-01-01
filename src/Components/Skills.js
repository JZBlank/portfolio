import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';


export default function Skills(){
    return <div>
        <Grid container spacing= {2} sx={{top:'100px', textAlign: 'center', position: 'relative'}}>
            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6', bgcolor: '#EDEDED' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Programming Languages</Typography>
                    </Container>

                    <Container sx={{top: '120px', height: '0px', width: '80%', bgcolor: '#797EF6', border: '5px solid #797EF6' }}></Container>
                    
                    <Grid container position= 'relative' sx={{textAlign: 'center', top: '20px'}}>
                        <Grid xs={12} md={12} sx={{left: '40%'}}>
                            <Typography>
                                Python <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png" height="50px" width="50"/>
                            </Typography>
                            <Typography>
                                C++ <img src="https://cdn2.iconfinder.com/data/icons/strongicon-vol-24-free/24/filetype-16-1024.png" height="50px" width="50"/>
                            </Typography>

                            <Typography>
                                Java <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-1024.png" height="50px" width="50"/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6', bgcolor: '#EDEDED' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Technologies and Tools</Typography>
                    </Container>

                    <Container sx={{top: '120px', height: '0px', width: '80%', bgcolor: '#797EF6', border: '5px solid #797EF6' }}></Container>

                    <Grid container position= 'relative' sx={{textAlign: 'center', top: '20px'}}>
                        <Grid xs={12} md={12} sx={{left: '40%'}} >
                            <Typography>
                                React <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png" height="50px" width="50"/>
                            </Typography>

                            <Typography>
                                GitHub <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png" height="50px" width="50"/>
                            </Typography>

                            <Typography>
                                Figma <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png" height="50px" width="50"/>
                            </Typography>

                        </Grid>
                    </Grid>

                </Container>
            </Grid>

            <Grid xs={12} md={4}>
                <Container sx={{height: '500px'}}>
                    <Container sx={{top: '100px', margin: 'auto', padding: '10px', top: '60px', height:'35%', width: '70%', border: '7px solid #797EF6', bgcolor: '#EDEDED' }}>
                        <Typography sx={{ fontSize: '2vw', marginTop: '10%', textAlign: 'center'}}>Web Development</Typography>
                    </Container>

                    <Container sx={{top: '120px', height: '0px', width: '80%', bgcolor: '#797EF6', border: '5px solid #797EF6' }}></Container>

                    <Grid container position= 'relative' sx={{textAlign: 'center', top: '20px'}}>
                        <Grid xs={12} md={12} sx={{left: '40%'}} >
                            <Typography>
                                HTML <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png" height="50px" width="50"/>
                            </Typography>

                            <Typography>
                                CSS <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png" height="50px" width="50"/>
                            </Typography>

                            <Typography>
                                JavaScript <img src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-1024.png" height="50px" width="50"/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    </div>
}