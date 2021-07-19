import React, {useState} from "react";
import {Grid, makeStyles, Toolbar, Menu, MenuItem, Typography, Button} from "@material-ui/core";
import {Dashboard, Edit, ExitToApp, Face, Lock, Menu as Hamburger, MoreHoriz} from "@material-ui/icons";
import {Link} from "react-router-dom";

const MobileHeader = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            menu: {},
            link: {
                textDecoration: 'none'
            },
            brand: {
                textTransform: 'uppercase'
            }
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
        setOpenMenu(false);
        setAnchorEl(null);
    }
    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true} xs={2}>
                    <Hamburger color="secondary" onClick={handleDrawerOpen} className={classes.menu}/>
                </Grid>
                <Grid item={true} xs={9} container={true} justifyContent="flex-start">
                    <Typography className={classes.brand} color="textPrimary" variant="h6">VienHealth</Typography>
                </Grid>
                <Grid item={true} xs={1}>
                    <MoreHoriz color="secondary" onClick={handleMoreClick}/>
                    <Menu
                        open={openMenu}
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        elevation={2}>
                        <MenuItem>
                            <Link to="/" className={classes.link}>
                                <Button variant="text" startIcon={<Face/>}>
                                    Profile
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/dashboard" className={classes.link}>
                                <Button variant="text" startIcon={<Dashboard/>}>
                                    Dashboard
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/edit-profile" className={classes.link}>
                                <Button variant="text" startIcon={<Edit/>}>
                                    Edit Profile
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/auth/change-password" className={classes.link}>
                                <Button variant="text" startIcon={<Lock/>}>
                                    Change Password
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Button variant="text" startIcon={<ExitToApp/>}>
                                Logout
                            </Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;