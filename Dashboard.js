import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar'; // Import AppBar
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box, Menu, MenuItem, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import dummyData from './data';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar';
import Apply from './Apply';
import MoreDetails from './MoreDetails';

// ... rest of the code


const Dashboard = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [dropdownAnchor, setDropdownAnchor] = useState(null);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleDropdownClick = (item) => {
        if (dropdownItem === item) {
            setDropdownItem(null);
        } else {
            setDropdownItem(item);
        }
    };

    const handleMoreDetailsClick = (company, job) => {
        setSelectedCompany(company);
        setSelectedJob(job);
        setCurrentPage('more-details');
    };

    const handleApplyClick = (company, job) => {
        setSelectedCompany(company);
        setSelectedJob(job);
        setCurrentPage('apply'); // Set current page to 'apply'
    };

    const handleBackClick = () => {
        setCurrentPage('home');
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDropdownClose = () => {
        setDropdownAnchor(null);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return renderHomePage();
            case 'more-details':
                return renderMoreDetailsPage();
            case 'apply':
                return renderApplyPage();
            default:
                return null;
        }
    };

    const renderHomePage = () => (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                height: '100vh',
            }}
        >
            <Box>
                {dummyData.map(company => (
                    company.jobs.map(job => (
                        <Paper key={job.job_title} sx={{ margin: '100px', width: '600px', elevation: 4 }}>
                            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                    <img src={company.company_logo} alt={company.company_name} style={{ width: '100px', height: 'auto', }} />
                                </Box>
                                <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
                                    {job.job_title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    Company: {company.company_name}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    Location: {job.location}
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
                                    Description: {job.description}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant="contained" color="primary" onClick={() => handleApplyClick(company, job)}>
                                        Apply
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleMoreDetailsClick(company, job)}>
                                        More Details
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    ))
                ))}
            </Box>
        </Container>
    );

    const renderMoreDetailsPage = () => (
        <Container>
            <IconButton onClick={handleBackClick}>
                <ArrowBackIcon />
            </IconButton>
            {selectedCompany && selectedJob && <MoreDetails company={selectedCompany} job={selectedJob} />}
        </Container>
    );

    const renderApplyPage = () => (
        <Container>
            <IconButton onClick={handleBackClick}>
                <ArrowBackIcon />
            </IconButton>
            {selectedCompany && selectedJob && <Apply company={selectedCompany} job={selectedJob} />}
        </Container>
    );

    return (
        <div>
            <AppBar>
                <Toolbar>
                    {currentPage === 'more-details' || currentPage === 'apply' ? (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="back"
                            sx={{ mr: 2 }}
                            onClick={handleBackClick}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        JOB PORTAL
                    </Typography>
                    <IconButton color="inherit" >
                        <ChatIcon />
                    </IconButton>
                    <IconButton color="inherit" >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <Avatar alt="Profile" src="/path/to/profile-picture.jpg" />
                    </IconButton>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
                <Paper sx={{ width: '300px', height: '100%', overflowY: 'auto' }}>
                    <List>
                        <ListItem button onClick={() => handleDropdownClick('job type')}>
                            <ListItemText primary="Job Type" />
                            {dropdownItem === 'job type' && (
                                <List style={{ paddingLeft: '16px' }}>
                                    <ListItem button>
                                        <ListItemText primary="Part Time" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Full Time" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Both Part Time and full time" />
                                    </ListItem>
                                </List>
                            )}
                            {dropdownItem !== 'job type' && <ExpandMoreIcon />}
                        </ListItem>
                        {/* ... (your existing code) */}
                    </List>
                    <List style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <ListItem button>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Paper>
            </Drawer>
            {renderPage()}
        </div>
    );
};


export default Dashboard;