import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Registration() {
    const [Name, setUname] = useState(null);
    const [Mobileno, setMobileno] = useState(null);
    const [Email, setEmail] = useState(null)
    const [UserPassword, setUserpassword] = useState(null)


    const history = useNavigate();

    function SendDate() {
        let sendAbleData = ({ Name, Mobileno,Email, UserPassword });
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
        <div>
            <h1>Register Here</h1>
            <TextField id="standard-basic" label="name" variant="standard" onChange={(e) => setUname(e.target.value)} /><br /><br />
            <TextField id="standard-basic" label="mobileno" variant="standard" onChange={(e) => setMobileno(e.target.value)} /><br /><br />
            <TextField id="standard-basic" label="email" variant="standard" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <TextField id="standard-basic" label="password" variant="standard" type="password" onChange={(e) => setUserpassword(e.target.value)} /><br /><br />
            <Button variant="contained" onClick={SendDate} endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    )
}
export default Registration;