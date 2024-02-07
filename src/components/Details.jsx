import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import image from "../assets/gradient.jpeg"
import image2 from "../assets/gradient2.jpeg"


export default function Details() {
    return (
        <Grid container spacing={6}  >
            <Grid item xs={3}>
                <Card sx={{ width: '400px', marginLeft: '30px' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title=""
                    />
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>   
                        <Typography>
                            -
                        </Typography>
                        <Typography>
                            -
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ width: '400px', marginLeft: '30px' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image2}
                        title=""
                    />
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" >
                            Logged in
                        </Typography>
                        <Typography variant="subtitle1" >
                            2000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ width: '400px', marginLeft: '30px' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title=""
                    />
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" >
                            CPU Users
                        </Typography>
                        <Typography variant="subtitle1" >
                            2000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ width: '400px', marginLeft: '30px' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title=""
                    />
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" >
                            CPU Login
                        </Typography>
                        <Typography variant="subtitle1" >
                            2000
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}