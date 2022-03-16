import Header from "./Header";
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import userEvent from "@testing-library/user-event";
import { ListItemSecondaryAction } from "@mui/material";
import Registration from "../Registration/Registration";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 }]




function Profile() {
    const [usersData, setUserdata] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);


  

    const [showDialog, setShowDialog] = useState(false)

    function openOption(gettingValue) {
        setShowDialog(true)
        console.log(gettingValue);
  
    }
    function closeOption() {
        setShowDialog(false)
    }

    useEffect(() => {
        fetch("https://retoolapi.dev/0hCiJE/data").then((results) => {
            console.log(results)
            results.json().then((res) => {
                setUserdata(res);
            })


        })
    }, [])

    // ------------------------------------
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   

    return (
        <div>
            <Header />
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell><Button>Operation</Button></TableCell>
                                <TableCell><Button>Operation</Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersData.map((items, i) => {
                                return <TableRow key={i}>
                                    <TableCell>{items.name}</TableCell>
                                    <TableCell>{items.email}</TableCell>
                                    <TableCell><NavLink to={"dialogtest/" + items.id}><Button>Update</Button></NavLink></TableCell>
                                    <TableCell><Button >Delete</Button></TableCell>
                                </TableRow>
                            })

                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={totalRecords}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <Dialog open={showDialog}>
                <DialogTitle>Register Here</DialogTitle>
                <DialogContent dividers>
                    <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
                    <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
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
export default Profile;