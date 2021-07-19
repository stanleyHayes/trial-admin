import React, {useState} from "react";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../redux/authentication/auth-action-creators";
import {Alert} from "@material-ui/lab";

const LoginPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                backgroundColor: theme.palette.background.default,
                minHeight: '100vh',
            },
            textField: {
                marginTop: 8,
                marginBottom: 8
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            button: {
                marginTop: 8,
                marginBottom: 8,
                paddingBottom: 16,
                paddingTop: 16,
                backgroundColor: theme.palette.primary.main
            },
            link: {
                textDecoration: 'none'
            },
            gridContainer: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            title: {
                marginTop: 16,
                marginBottom: 16
            },
            image: {
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            },
            logo: {
                width: 100,
                height: 100
            }
        }
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const {email, password} = user;
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState({});
    const [hasError, setHasError] = useState(false);

    const {loading, error: authError} = useSelector(state => state.auth);

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({...error, email: "Field required"});
            setHasError(true);
        }

        if (!email) {
            setError({...error, email: "Field required"});
            setHasError(true);
        }
        if (hasError) {
            return;
        } else {
            dispatch(signIn({email, password}, history));
        }
    }

    const handleShowPassword = () => {
        setVisible(!visible);
    }

    return (
        <div className={classes.container}>
            <Container className={classes.gridContainer}>
                <Grid container={true} justifyContent="center" alignItems="center">
                    <Grid item={true}>
                        <Avatar className={classes.logo} variant="rounded">
                            <img className={classes.image} alt="logo" src="/images/logo.png"/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Typography
                    color="textPrimary"
                    className={classes.title}
                    align="center"
                    gutterBottom={true}
                    variant="h4">
                    Darkdocs Shop
                </Typography>

                <Grid container={true} justifyContent="center" alignItems='center'>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={4}>
                            {loading && <LinearProgress variant="query"/>}
                            <CardContent>
                                {authError &&
                                <Alert severity="error" variant="outlined" title="Error">
                                    {authError}
                                </Alert>}
                                <Typography
                                    color="textPrimary"
                                    className={classes.title}
                                    align="center"
                                    gutterBottom={true}
                                    variant="h5">
                                    Sign In
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter email"
                                        margin="normal"
                                        className={classes.textField}
                                        value={email}
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        fullWidth={true}
                                    />

                                    <Grid container={true} spacing={2} alignItems="center">
                                        <Grid item={true}>
                                            <Checkbox checked={visible} onChange={handleShowPassword}/>
                                        </Grid>
                                        <Grid item={true}>
                                            <Typography color="textPrimary" variant="body2" gutterBottom={true}>
                                                {visible ? 'Hide' : 'Show'}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        placeholder="Enter password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={password}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="password"
                                        fullWidth={true}
                                    />

                                    <Link className={classes.link} to="/auth/forgot-password">
                                        <Button fullWidth={true} variant="text" size="small">
                                            Forgot Password?
                                        </Button>
                                    </Link>

                                    <Button
                                        disabled={loading}
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth={true}
                                        className={classes.button}
                                        variant="outlined"
                                        size="small">
                                        Login
                                    </Button>

                                    <Link className={classes.link} to="/auth/register">
                                        <Button fullWidth={true} variant="text" size="small">
                                            Don't have an account? Register
                                        </Button>
                                    </Link>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LoginPage;
