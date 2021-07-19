import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {DatePicker} from "@material-ui/pickers";

const UpdateCouponDialog = ({openUpdateCouponDialog, handleUpdateCouponDialogClose, originalCoupon}) => {

    const useStyles = makeStyles(theme => {
        return {
            closeButton: {},
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            submitButton: {
                marginTop: 16,
                paddingTop: 16,
                paddingBottom: 16
            },
            textField: {
                marginBottom: 8
            },
            title: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();

    const [coupon, setCoupon] = useState({...originalCoupon});
    const [error, setError] = useState({});

    const handleSubmit = event => {
        event.preventDefault();

        if(!coupon.code){
            setError({...error, code: 'Field required'});
        }else {
            setError({...error, code: null});
        }

        if(!coupon.percentage){
            setError({...error, percentage: 'Field required'});
        }else {
            setError({...error, percentage: null});
        }

        if(!coupon.startDate){
            setError({...error, startDate: 'Field required'});
        }else {
            setError({...error, startDate: null});
        }

        if(!coupon.endDate){
            setError({...error, endDate: 'Field required'});
        }else {
            setError({...error, endDate: null});
        }
        handleUpdateCouponDialogClose();
    }

    const handleChange = event => {
        setCoupon({...coupon, [event.target.name]: event.target.value});
    }

    const handleStartDateChange = date => {
        setCoupon({...coupon, startDate: date});
    }

    const handleEndDateChange = date => {
        setCoupon({...coupon, endDate: date});
    }

    return (
        <Dialog open={openUpdateCouponDialog} onClose={handleUpdateCouponDialogClose}>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Typography gutterBottom={true} variant="h5" className={classes.title} align="center">
                        Update Coupon
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Code"
                        placeholder="Enter coupon code"
                        margin="normal"
                        className={classes.textField}
                        value={coupon.code}
                        type="text"
                        onChange={handleChange}
                        name="code"
                        fullWidth={true}
                        error={Boolean(error.code)}
                        helperText={error.code}
                    />

                    <TextField
                        variant="outlined"
                        label="Percentage"
                        placeholder="Enter coupon percentage"
                        margin="normal"
                        className={classes.textField}
                        value={coupon.percentage}
                        type="number"
                        onChange={handleChange}
                        name="percentage"
                        fullWidth={true}
                        error={Boolean(error.code)}
                        helperText={error.code}
                    />

                    <DatePicker
                        inputVariant="outlined"
                        value={coupon.startDate}
                        className={classes.textField}
                        emptyLabel="Select Start Date"
                        onChange={handleStartDateChange}
                        variant="dialog"
                        fullWidth={true}
                        margin="normal"
                        label="Start Date"
                    />

                    <DatePicker
                        inputVariant="outlined"
                        value={coupon.endDate}
                        emptyLabel="Select End Date"
                        className={classes.textField}
                        onChange={handleEndDateChange}
                        variant="dialog"
                        fullWidth={true}
                        margin="normal"
                        label="End Date"
                    />

                    <Button variant="contained" color="secondary" fullWidth={true} className={classes.submitButton}>
                        Update Coupon
                    </Button>
                </form>
            </DialogContent>
            <Divider variant="fullWidth" className={classes.divider}/>
            <DialogActions>
                <Button onClick={handleUpdateCouponDialogClose} variant="outlined" className={classes.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateCouponDialog;
