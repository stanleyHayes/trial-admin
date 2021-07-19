import React, {useState} from "react";
import {Grid, makeStyles, Toolbar, Menu, MenuItem, Typography} from "@material-ui/core";
import {Menu as Hamburger, MoreHoriz} from "@material-ui/icons";

const MobileHeader = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            menu: {}
        }
    });

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleMoreClick = event => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }
    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true} xs={2}>
                    <Hamburger onClick={handleDrawerOpen} className={classes.menu}/>
                </Grid>
                <Grid item={true} xs={8} container={true} justifyContent="flex-start">
                    <Typography variant="h6">VienHealth</Typography>
                </Grid>
                <Grid item={true} xs={2}>
                    <MoreHoriz onClick={handleMoreClick}/>
                    <Menu
                        open={openMenu}
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        elevation={2}>
                        <MenuItem>Profile</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;