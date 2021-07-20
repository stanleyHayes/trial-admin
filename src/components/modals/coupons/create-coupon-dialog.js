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
import {useDispatch, useSelector} from "react-redux";
import {createCoupon} from "../../../redux/coupons/coupons-action-creators";

const CreateCouponDialog = ({openCouponDialog, handleCouponDialogClose}) => {

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

    const dispatch = useDispatch();
    const classes = useStyles();

    const [coupon, setCoupon] = useState({startDate: Date.now(), endDate: Date.now()});
    const [error, setError] = useState({});
    const {token} = useSelector(state => state.auth);

    const handleSubmit = event => {
        event.preventDefault();

        if (!coupon.code) {
            setError({...error, code: 'Field required'});
            return;
        } else {
            setError({...error, code: null});
        }

        if (!coupon.percentage) {
            setError({...error, percentage: 'Field required'});
            return;
        } else {
            setError({...error, percentage: null});
        }

        if (!coupon.startDate) {
            setError({...error, startDate: 'Field required'});
            return;
        } else {
            setError({...error, startDate: null});
        }

        if (!coupon.endDate) {
            setError({...error, endDate: 'Field required'});
            return;
        } else {
            setError({...error, endDate: null});
        }
        dispatch(createCoupon(coupon, token));
        handleCouponDialogClose();
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
        <Dialog open={openCouponDialog} onClose={handleCouponDialogClose}>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Typography gutterBottom={true} variant="h5" className={classes.title} align="center">
                        Create Coupon
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Name"
                        placeholder="Enter coupon code"
                        margin="normal"
                        className={classes.textField}
                        value={coupon.code}
                        type="text"
                        onChange={handleChange}
                        name="code"
                        fullWidth={true}
                        error={Boolean(error.code)}
                        required={true}
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
                        required={true}
                        fullWidth={true}
                        helperText={error.percentage}
                        error={Boolean(error.percentage)}
                    />

                    <DatePicker
                        inputVariant="outlined"
                        value={coupon.startDate}
                        className={classes.textField}
                        emptyLabel="Select Start Date"
                        onChange={handleStartDateChange}
                        variant="dialog"
                        name="startDate"
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
                        name="endDate"
                        fullWidth={true}
                        margin="normal"
                        label="End Date"
                    />

                    <Button
                        onClick={handleSubmit}
                        color="secondary"
                        variant="contained"
                        fullWidth={true}
                        className={classes.submitButton}>
                        Create Coupon
                    </Button>
                </form>
            </DialogContent>
            <Divider variant="fullWidth" className={classes.divider}/>
            <DialogActions>
                <Button onClick={handleCouponDialogClose} variant="outlined" className={classes.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateCouponDialog;
