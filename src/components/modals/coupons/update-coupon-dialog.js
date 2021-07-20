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
import {updateCoupon} from "../../../redux/coupons/coupons-action-creators";
import {useDispatch, useSelector} from "react-redux";

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
    const dispatch = useDispatch();

    const {token} = useSelector(state => state.auth);

    const [coupon, setCoupon] = useState({...originalCoupon});
    const [error, setError] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        const updatedCoupon = {};
        if(coupon.code !== originalCoupon.code){
            updatedCoupon['code'] = coupon.code;
        }

        if(coupon.code !== originalCoupon.code && !coupon.code){
            setError({...error, code: 'Field required'});
            return;
        }else {
            setError({...error, code: null});
        }

        if(coupon.percentage !== originalCoupon.percentage){
            updatedCoupon['percentage'] = coupon.percentage;
        }

        if(coupon.percentage !== originalCoupon.percentage && !coupon.percentage){
            setError({...error, percentage: 'Field required'});
            return;
        }else {
            setError({...error, percentage: null});
        }

        if(coupon.startDate !== originalCoupon.startDate){
            updatedCoupon['startDate'] = coupon.startDate;
        }

        if(coupon.startDate !== originalCoupon.startDate &&!coupon.startDate){
            setError({...error, startDate: 'Field required'});
            return;
        }else {
            setError({...error, startDate: null});
        }

        if(coupon.endDate !== originalCoupon.endDate){
            updatedCoupon['endDate'] = coupon.endDate;
        }

        if(coupon.endDate !== originalCoupon.endDate &&!coupon.endDate){
            setError({...error, endDate: 'Field required'});
            return;
        }else {
            setError({...error, endDate: null});
        }
        dispatch(updateCoupon(originalCoupon._id, updatedCoupon, token));
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
                        helperText={error.startDate}
                        error={Boolean(error.startDate)}
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
                        error={Boolean(error.endDate)}
                        helperText={error.endDate}
                    />

                    <Button onClick={handleSubmit} variant="contained" color="secondary" fullWidth={true} className={classes.submitButton}>
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
