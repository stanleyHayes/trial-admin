import React, {useState} from "react";
import {Avatar, Button, Grid, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Dashboard, Edit, ExitToApp, Face, KeyboardArrowDown, Lock} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            profileButton: {},
            brand: {
                textTransform: 'uppercase'
            },
            link: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            },
            avatar: {
                backgroundColor: theme.palette.secondary.main
            },
            initials: {
                color: "white"
            }
        }
    });

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const {user} = useSelector(state => state.auth);

    const handleMoreClick = event => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const getInitials = name => {
        const names = name.split(' ');
        if(names.length === 0)
            return 'U'
        else if(name.length === 1)
            return names[0][0];
        else if(names.length === 2)
            return `${names[0][0]}${names[1][0]}`
    }

    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <Typography color="secondary" className={classes.brand} variant="h4">VienHealth</Typography>
                </Grid>
                <Grid item={true}>
                    <Button
                        color="secondary"
                        onClick={handleMoreClick}
                        startIcon={
                            <Avatar className={classes.avatar}>
                                <Typography className={classes.initials} variant="h6" align="center">
                                    {user && getInitials(user.name)}
                                </Typography>
                            </Avatar>}
                        endIcon={<KeyboardArrowDown/>}
                        variant="outlined"
                        className={classes.profileButton}>
                        {user && user.name}
                    </Button>
                    <Menu
                        fullWith={true}
                        variant="menu"
                        keepMounted={true}
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
                            <Link to="/" className={classes.link}>
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
                            <Link to="/auth/login" className={classes.link}>
                                <Button variant="text" startIcon={<ExitToApp/>}>
                                    Logout
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;