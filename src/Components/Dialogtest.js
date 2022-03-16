import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField  } from '@mui/material';
import {withRouter} from 'react-router-dom'

function Dialogtest(props)
{
    console.log("props",props)
    const[showDialog,setShowDialog]=useState(true)

    function openOption()
    {
        setShowDialog(true)
    }
    function closeOption()
    {
        setShowDialog(false)
    }
    return(
        <div>
            <Button onClick={openOption}>Open dialog</Button>
            <Dialog open={showDialog}>
                <DialogTitle>Register Here</DialogTitle>
                <DialogContent dividers>
                    <TextField id="outlined-basic" label="Name" variant="outlined" /><br/><br/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    
                </DialogContent>
                <DialogActions>
                    <Button>Update</Button>
                    <Button onClick={closeOption}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Dialogtest;