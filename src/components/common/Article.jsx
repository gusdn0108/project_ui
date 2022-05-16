import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import Login from '../pages/Login';

function Article() {
    const [open, setOpen] = useState(false)
    return (
        <article style={{ border: '1px solid gray' }}>
            <h2>아티클이래</h2>
            <ButtonGroup>
                <Button variant="outlined" onClick={() => {
                    setOpen(true)
                }}>Login</Button>
                <Button variant="outlined">Update</Button>
            </ButtonGroup>
            <Button variant="outlined">Delete</Button>
            <Dialog open={open}>
                <DialogTitle>Create</DialogTitle>
                <DialogContent>
                    <DialogContentText><Login /></DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined">Create</Button>
                    <Button variant="outlined" onClick={() => {
                        setOpen(false)
                    }}>Cancel</Button>

                </DialogActions>
            </Dialog>
        </article>
    )
}

export default Article