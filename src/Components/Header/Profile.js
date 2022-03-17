import Header from "./Header";
import * as React from 'react';
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { TableHead, TablePagination } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import userEvent from "@testing-library/user-event";
import Registration from "../Registration/Registration";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import DialogContentText from '@mui/material/DialogContentText';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 }]


function Profile() {
    const [usersData, setUserdata] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);


    const [personalData, setPersonalData] = useState([])
    const [newUsers, setNewUser] = useState(null);
    const [Name, setUname] = useState(null);
    const [Mobileno, setMobileno] = useState(null);
    const [Email, setEmail] = useState(null)

    const [showDialog, setShowDialog] = useState(false)
    const [showYesNo, setYesNoDialog] = useState(false)
    const [showYesNoDelete, setYesNoDeleteDialog] = useState(false)

    const [deleteRocord, setDeleteRecord] = useState()

    function closeOption() {
        setShowDialog(false)
    }

    function fetchData() {
        fetch("https://retoolapi.dev/SdvQQz/data").then((results) => {
            console.log(results)
            results.json().then((res) => {
                setUserdata(res);
            })
        })
    }
    useEffect(() => {
        fetchData();
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


    const updateRecord = (ids) => {
        console.log(ids)

        fetch(`https://retoolapi.dev/SdvQQz/data/${ids}`).then((result) => {
            result.json().then((res) => {
                console.log("personal results", res)
                setPersonalData(res);
                setNewUser(res);

            }
            )
        })
        setShowDialog(true)

    }

    function changeData() {
        setShowDialog(false)
        setYesNoDialog(true);
    }

    const handleUpdate = () => {
        let sendAbleData = { ...newUsers, Name, Mobileno, Email };
        console.log(sendAbleData);

        fetch(`https://retoolapi.dev/SdvQQz/data/${newUsers.id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendAbleData)
            }).then((result) => {
                result.json().then((res) => {
                    console.log(res)
                    fetchData();
                }
                )
            })
        console.log("updaetd");
        setShowDialog(false)
        setYesNoDialog(false)
    }

    function sendRecord(ids) {
        console.log("delete",ids)
        setYesNoDeleteDialog(true);
        setDeleteRecord(ids)
    }
    const handleDelete = () => {

        fetch(`https://retoolapi.dev/SdvQQz/data/${deleteRocord}`,
            {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((res) => {
                    console.log(res)
                    fetchData();
                    setYesNoDeleteDialog(false);
                }
                )
            })
    }
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
                                    <TableCell>{items.Name}</TableCell>
                                    <TableCell>{items.Email}</TableCell>
                                    <TableCell>{items.Mobileno}</TableCell>
                                    <TableCell><Button onClick={() => updateRecord(items.id)}>Update</Button></TableCell>
                                    <TableCell><Button onClick={() => sendRecord(items.id)}>Delete</Button></TableCell>
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
                    <TextField id="outlined-basic" label="Name" color="secondary" placeholder={personalData.Name} onChange={(e) => setUname(e.target.value)} focused /><br /><br />
                    <TextField id="outlined-basic" label="Mobileno" color="secondary" placeholder={personalData.Mobileno} onChange={(e) => setMobileno(e.target.value)} variant="outlined" focused /><br /><br />
                    <TextField id="outlined-basic" label="Email" color="secondary" placeholder={personalData.Email} variant="outlined" onChange={(e) => setEmail(e.target.value)} focused />
                </DialogContent>
                <DialogActions>
                    <Button onClick={changeData}>Update</Button>
                    <Button onClick={closeOption}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={showYesNo}
                TransitionComponent={Transition}
                keepMounted

                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you Searisously Want to Update User Record"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleUpdate}>Yes</Button>
                    <Button onClick={() => { setYesNoDialog(false) }}>No</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={showYesNoDelete}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you Searisously Want to DELETE User Record"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={() => { setYesNoDeleteDialog(false) }}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Profile;