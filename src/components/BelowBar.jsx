import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Button } from '@mui/material';




function BelowBar() {

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fffffe', marginBottom: '50px' }}>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Button  startIcon={<HomeOutlinedIcon />} sx={{color: '#9a9a9a' ,'& .MuiButtonBase': { fontSize: 'small' }}}>
                        Home
                    </Button>
                    <Button  startIcon={<GroupsOutlinedIcon />} sx={{color: '#9a9a9a' ,'& .MuiButtonBase': { fontSize: 'small' } , marginLeft: '10px' }}>
                        Transaction Queue
                    </Button>
                    <Button  startIcon={<PersonOutlinedIcon />} sx={{color: '#9a9a9a' ,'& .MuiButtonBase': { fontSize: 'small' }, marginLeft: '10px'}}>
                        Master
                    </Button>
                    <Button  startIcon={<MoreVertOutlinedIcon />} sx={{color: '#9a9a9a' ,'& .MuiButtonBase': { fontSize: 'small' }, marginLeft: '10px'}}>
                        More
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default BelowBar;