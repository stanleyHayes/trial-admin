import React, {useState} from "react";
import {Grid, Hidden, makeStyles, SwipeableDrawer} from "@material-ui/core";
import Header from "../headers/header";
import DrawerContent from "../drawer/drawer-content";

const Layout = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    }

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }

    const useStyles = makeStyles(theme => {
        return {
            content: {
                backgroundColor: theme.palette.background.default,
                paddingTop: 64
            },
            root: {
                minHeight: '100vh'
            }
        }
    });

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <div>
                    <Header handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleCloseDrawer}/>
                </div>
                <Grid container={true} className={classes.root}>
                    <Hidden smDown={true}>
                        <Grid item={true} md={3} lg={2}>
                            <DrawerContent/>
                        </Grid>
                    </Hidden>
                    <Grid className={classes.content} item={true} md={9} lg={10}>
                        {children}
                    </Grid>
                </Grid>
            </div>

            <SwipeableDrawer onClose={handleCloseDrawer} onOpen={handleDrawerOpen} open={drawerOpen}>
                <DrawerContent handleDrawerClose={handleCloseDrawer}/>
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Layout;