import react, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import TextField from '@mui/material/TextField';
import theme from './theme';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      boxShadow:theme.shadows[7],
    },
    
    h1: {
        backgroundColor: '',
        
        boxShadow:theme.shadows[3],
      },
    mybtn:{
        boxShadow:theme.shadows[5],
        color:"red"
    },
    typography:{
        color:theme.palette.secondary.light
    },
  });

function CSSTesting() 
{
    const classes = useStyles();

    return(
        <>
        
     
            <div>
                <div className="mx-auto">
                    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                    <h1 className={classes.h1}>h1</h1>
                    <h2 className={classes.h2}>h2</h2>
                    <Typography className={classes.typography}>Typography</Typography>
                    <br />
                    <br />
                    <Button className={classes.root}>button</Button>
                </div>

            </div>
    
        </>
    )
}
export default CSSTesting;