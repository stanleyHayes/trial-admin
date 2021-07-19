import React from "react";
import {Avatar, Button, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {KeyboardArrowDown} from "@material-ui/icons";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            profileButton: {},
            brand: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <Typography className={classes.brand} variant="h4">VienHealth</Typography>
                </Grid>
                <Grid item={true}>
                    <Button startIcon={<Avatar>SH</Avatar>} endIcon={<KeyboardArrowDown />} variant="outlined" className={classes.profileButton}>
                        Stanley Hayford
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;