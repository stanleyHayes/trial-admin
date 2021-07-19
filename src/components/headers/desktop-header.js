import React, {useState} from "react";
import {Avatar, Button, Grid, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Face, KeyboardArrowDown} from "@material-ui/icons";
import {Link} from "react-router-dom";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            profileButton: {

            },
            brand: {
                textTransform: 'uppercase'
            },
            link: {
                textDecoration: 'none'
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

    const handleMoreClick = event => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <Typography className={classes.brand} variant="h4">VienHealth</Typography>
                </Grid>
                <Grid item={true}>
                    <Button
                        onClick={handleMoreClick}
                        startIcon={
                            <Avatar className={classes.avatar}>
                                <Typography className={classes.initials} variant="h6" align="center">
                                    SH
                                </Typography>
                            </Avatar>}
                        endIcon={<KeyboardArrowDown/>}
                        variant="outlined"
                        className={classes.profileButton}>
                        Stanley Hayford
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
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;