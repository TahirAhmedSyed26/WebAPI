import React, { useState, useEffect } from "react";
import {Button, ButtonGroup} from "rea"
import { connect } from "react-redux";
import * as actions from "../actions/dLookup";
import DLookupForm from "./DLookupForm";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, ButtonGroup} from "@mui/material";
//import Button from 'react-bootstrap/Button';

// or less ideally
//import { Button } from 'react-bootstrap';
//import { makeStyles } from "@mui/styles";
//import DLookup from "./DLookup";
//import { Container } from "@mui/system";
//import { withStyles } from "@mui/styles";

// const styles = {
//     root:{
//         "& .MuiTableCell-head":{
//             fontSize: "1.25rem"
//         }
//     },
//     paper : {
//         margin: withStyles.spacing(2),
//         padding: withStyles.spacing(2)
//     }
// }

// const styles = theme => ({
//     root: {
//         "& .MuiTableCell-head": {
//             fontSize: "1.25rem"
//         }
//     },
//     paper: {
//         margin: theme.spacing(2),
//         padding: theme.spacing(2)
//     }
// })

const DLookup = ( {classes, ...props} ) => {

    useEffect(() => { props.fetchAllDLookup() }, [])

    return (
        // <Paper className="classes.paper" elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <DLookupForm {...({ currentId, setCurrentId })} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                             {/* <TableHead className={classes.root}>  */}
                            <TableHead> 
                           <TableRow>
                                <TableCell> Customer Code </TableCell>
                                <TableCell> English Name </TableCell>
                                <TableCell> Arabic Name </TableCell>
                                <TableCell> Mobile Number </TableCell>
                                <TableCell> Email </TableCell>
                                <TableCell> Country </TableCell>
                                <TableCell> City </TableCell>
                                <TableCell> Address Line 1 </TableCell>
                                <TableCell> Address Line 2 </TableCell>
                                <TableCell> Address Line 2 </TableCell>
                           </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dLookupList.map((record,index)=>{
                                        return (
                                            <TableRow key={index} hover>
                                                <TableCell>{record.CustomerCode}</TableCell>
                                                <TableCell>{record.EnglishName}</TableCell>
                                                <TableCell>{record.ArabicName}</TableCell>
                                                <TableCell>{record.MobileNumber}</TableCell>
                                                <TableCell>{record.Email}</TableCell>
                                                <TableCell>{record.Country}</TableCell>
                                                <TableCell>{record.City}</TableCell>
                                                <TableCell>{record.AddressLine1}</TableCell>
                                                <TableCell>{record.AddressLine2}</TableCell>
                                                <TableCell>{record.AddressLine3}</TableCell>
                                                <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                            </TableRow>
                                        )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        // </Paper>

    );
}



const mapStateToProps = state => ({

    dLookupList: state.dLookup.list

})

const mapActionToProps = {
    fetchAllLookup: actions.fetchAll
}

//export default connect(mapStateToProps, mapActionToProps)((DLookup));
export default connect(mapStateToProps, mapActionToProps)(DLookup);