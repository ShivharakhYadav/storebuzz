import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Typography, Box, Icon } from '@mui/material'
function Registration() {
    const [Name, setUname] = useState(null);
    const [Mobileno, setMobileno] = useState(null);
    const [Email, setEmail] = useState(null)
    const [UserPassword, setUserpassword] = useState(null)


    const history = useNavigate();

    function SendDate() {
        let sendAbleData = ({ Name, Mobileno, Email, UserPassword });
        console.log(sendAbleData);

        let setLocalStorage = fetch("https://retoolapi.dev/SdvQQz/data",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendAbleData)
            }).then((result) => {
                result.json().then((res) => {
                    console.log(res)
                }
                )
            })
        localStorage.setItem("use-info", JSON.stringify(sendAbleData));
        history("/profile");
    }

    
    return (
        <Container sx={{  margin: 10, }} >
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item marginBottom={3} >
                    <img style={{ borderRadius: 10,height:'500px' }} src="images/Login/banner-sm-18.png" />
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant="h4" marginBottom={2}>Create Account</Typography>
                        <TextField style={{width:'300px'}} id="standard-basic"  label="Name" variant="outlined" onChange={(e) => setUname(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Mobileno" variant="outlined" onChange={(e) => setMobileno(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="filled-password-input" label="Password" type="password" variant="outlined" onChange={(e) => setUserpassword(e.target.value)} /><br /><br />
                        
                            <Typography ><Icon><CheckCircleIcon/></Icon> Capital Letter</Typography>
                            <Icon></Icon>
                            <Typography endIcon={<SendIcon />}>&#10004; <Icon>add_Circle</Icon>Number</Typography>
                            <Typography >&#10004; Small Letter</Typography>
                            <Typography> &#10004;Special Character</Typography>
                            
                        <br/>
                        <Button variant="contained" onClick={SendDate} endIcon={<SendIcon />}>
                            Create
                        </Button>
                        
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}
export default Registration;