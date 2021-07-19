import React from "react";
import {Button, Dialog, DialogActions, DialogContent, Divider, makeStyles, Typography} from "@material-ui/core";
import moment from "moment";

const ViewCouponDetailDialog = ({openViewCouponDialog, handleCouponDialogClose, coupon}) => {

    const useStyles = makeStyles(theme => {
        return {
            caption: {
                fontWeight: 'bold',
                textTransform: 'uppercase'
            },
            value: {},
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            closeButton: {
                paddingTop: 8,
                paddingBottom: 8
            },
            title: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();

    return (
        <Dialog open={openViewCouponDialog} onClose={handleCouponDialogClose}>
            <DialogContent>
                <Typography className={classes.title} gutterBottom={true} variant="h6" align="center">Coupon Detail</Typography>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Name</Typography>
                <Typography className={classes.value} variant="body2">{coupon.code}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Percentage</Typography>
                <Typography className={classes.value} variant="body2">{coupon.percentage}%</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Status</Typography>
                <Typography className={classes.value} variant="body2">{coupon.status}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Start Date</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    {moment(coupon.startDate).fromNow()}
                </Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">End Date</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    {moment(coupon.endDate).fromNow()}
                </Typography>
                <Divider variant="fullWidth" className={classes.divider}/>


                <Typography gutterBottom={true} className={classes.caption} variant="caption">Date Created</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    {moment(coupon.createdAt).fromNow()}
                </Typography>
                <Divider variant="fullWidth" className={classes.divider}/>


                <Typography gutterBottom={true} className={classes.caption} variant="caption">Date Updated</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    {moment(coupon.updatedAt).fromNow()}
                </Typography>
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

export default ViewCouponDetailDialog;
