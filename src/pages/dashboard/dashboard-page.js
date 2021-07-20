import React, {useEffect} from "react";
import Layout from "../../components/layout/layout";
import {Container, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const DashboardPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
            },
            title: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();
    const history = useHistory();

    const {token, loading} = useSelector(state => state.auth);
    useEffect(() => {
        if(!loading && !token){
            history.push('/auth/login');
        }
    }, [history, loading, token]);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography className={classes.title} variant="h4" align="center">Dashboard</Typography>
            </Container>
        </Layout>
    )
}

export default DashboardPage;