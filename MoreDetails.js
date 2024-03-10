import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ApplyForm from './Apply'; // Import the ApplyForm component

const MoreDetails = ({ company, job }) => {
    const [showApplyForm, setShowApplyForm] = useState(false);

    const handleApplyClick = () => {
        setShowApplyForm(true);
    };

    return (
        <div style={{ marginTop: '50px' }}>
            {!showApplyForm ? (
                <>
                    <Typography variant="h2" textAlign="left">{job.job_title}</Typography>
                    <Typography variant="h4" textAlign="left">{company.company_name}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Industry: {company.industry}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Location: {company.location}</Typography>
                    <Typography variant="body1" textAlign="left">Description: {company.description}</Typography>

                    <Typography variant="subtitle1" textAlign="left">Job Type: {job.job_type}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Employment: {job.employment}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Experience Required: {job.experience_required}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Skills Required: {job.skills_required}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Location: {job.location}</Typography>
                    <Typography variant="subtitle1" textAlign="left">Salary: {job.salary}</Typography>
                    <Typography variant="body1" textAlign="left">Description: {job.description}</Typography>

                    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                        <Button variant="contained" color="primary" onClick={handleApplyClick}>
                            Apply
                        </Button>
                    </div>
                </>
            ) : (
                <ApplyForm company={company} job={job} /> // Pass company and job details as props
            )}
        </div>
    );
}

export default MoreDetails;