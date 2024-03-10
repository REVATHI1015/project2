import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const ApplyForm = ({ company, job }) => {
    const [newSkill, setNewSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [checked, setChecked] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleSubmit = () => {
        handleOpenPopup();
        // Additional logic to handle form submission can be added here
    };

    return (
        <div style={{ marginTop: '50px', overflow: 'auto', maxHeight: '80vh' }}>
            <Typography variant="h4" component="h1" textAlign="left" gutterBottom>
                Welcome to Apply for {job.job_title} {job.employment} Provided by {company.company_name}
            </Typography>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Personal Information:
                    </Typography>
                    <TextField label="Full Name" variant="outlined" />
                    <TextField label="Email Address" variant="outlined" />
                    <TextField label="Phone Number" variant="outlined" />
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Address:
                    </Typography>
                    <TextField label="Street Address" variant="outlined" />
                    <TextField label="City" variant="outlined" />
                    <TextField label="State/Province" variant="outlined" />
                    <TextField label="Postal Code" variant="outlined" />
                    <TextField label="Country" variant="outlined" />
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Education:
                    </Typography>
                    <TextField label="Degree" variant="outlined" />
                    <TextField label="Institution" variant="outlined" />
                    <TextField label="Field of Study" variant="outlined" />
                    <TextField label="Graduation Year" variant="outlined" />
                    <TextField label="GPA" variant="outlined" />

                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Skills:
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <TextField label="Skills" variant="outlined" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                        <IconButton aria-label="add-skill" onClick={handleAddSkill}>
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                    {skills.map((skill, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body1">{skill}</Typography>
                            <IconButton aria-label="delete-skill" onClick={() => handleDeleteSkill(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Upload Your Resume:
                    </Typography>
                    <input type="file" style={{ marginBottom: '8px' }} accept=".pdf,.doc,.docx" />
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Why should you be hired for this role?
                    </Typography>
                    <TextField label="Your Answer" variant="outlined" multiline rows={6} />
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography variant="h6" component="h2" textAlign="left" gutterBottom>
                        Confirm your availability
                    </Typography>
                    <TextField label="Your Answer" variant="outlined" multiline rows={6} />
                </CardContent>
            </Card>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />
                        <Typography variant="body1">
                            I read and understand the job description
                        </Typography>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!checked} style={{ marginBottom: '16px' }}>
                Submit
            </Button>

            <Dialog open={openPopup} onClose={handleClosePopup}>
                <DialogTitle>Success!</DialogTitle>
                <DialogContent>
                    <Typography>
                        You have successfully registered for {job.job_title} {job.employment} Provided by {company.company_name}.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ApplyForm;
