import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import Paper from '@mui/material/Paper';


export default function Records() {
    return (
        <Grid container spacing={6} sx={{ margin: '40px auto' }} >
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px', marginLeft: '30px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Disbursement
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Post Disbursement
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Physical File
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px', marginLeft: '30px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Dealer Empanelment
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon size="large" />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Broker Empanelment
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ width: '500px', height: '400px' }}>
                    <CardContent sx={{ margin: '20px' }}>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <Avatar sx={{ bgcolor: '#307c88' }}>
                                <ViewInArOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' color="text.secondary" sx={{ margin: '5px' }} gutterBottom>
                                Udhayam
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    Case
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    WIP
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>

                            <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                                <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                                    User
                                </Typography>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>

                                    <Typography variant="h4" align="center">
                                        20
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}