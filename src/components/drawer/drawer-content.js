import React from "react";
import {Button, Container, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Dashboard, FilterVintage, MenuBook} from "@material-ui/icons";

const DrawerContent = () => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            },
            button: {
                textTransform: 'capitalize',
                fontWeight: 'bold'
            },
            root: {
                paddingTop: 84
            }
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Link className={classes.link} to="/">
                <Button className={classes.button} variant="text" startIcon={<Dashboard/>}>
                    Dashboard
                </Button>
            </Link>

            <Link className={classes.link} to="/coupons">
                <Button className={classes.button} variant="text" startIcon={<FilterVintage/>}>
                    Manage Coupons
                </Button>
            </Link>

            <Link className={classes.link} to="/used-coupons">
                <Button className={classes.button} variant="text" startIcon={<MenuBook/>}>
                    Manage Used Coupons
                </Button>
            </Link>
        </Container>
    )
}

export default DrawerContent;