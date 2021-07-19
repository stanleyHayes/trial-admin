import React from "react";
import {AppBar, Hidden, makeStyles} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = ({handleDrawerOpen, handleDrawerClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            appBar: {}
        }
    });

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} variant="outlined">
            <Hidden smDown={true}>
                <DesktopHeader />
            </Hidden>

            <Hidden mdUp={true}>
                <MobileHeader handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            </Hidden>
        </AppBar>
    )
}

export default Header;