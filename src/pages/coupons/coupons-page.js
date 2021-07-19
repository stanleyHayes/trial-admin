import React from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {Add, Delete, Edit, Visibility} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {green, grey, red} from "@material-ui/core/colors";
import {Alert} from "@material-ui/lab";
import moment from "moment";

const CouponsPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
            },
            title: {
                textTransform: 'uppercase'
            },
            addButton: {
                fontWeight: 'bold'
            },
            divider: {
                marginBottom: 16,
                marginTop: 16
            },
            empty: {
                textTransform: 'uppercase'
            },
            deleteIcon: {
                color: red['600']
            },
            viewIcon: {
                color: green['600']
            },
            editIcon: {
                color: grey['600']
            }
        }
    });

    const classes = useStyles();

    const {coupons, loading, error} = useSelector(state => state.coupons);

    return (
        <Layout>
            <Container className={classes.container}>
                {loading && <LinearProgress variant="query"/>}
                {error && <Alert variant="outlined" title="Error">{error}</Alert>}
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={12} md={8} lg={10}>
                        <Typography color="textSecondary" variant="h4">
                            Coupons ({coupons && coupons.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Button startIcon={<Add/>} variant="contained" color="secondary" className={classes.addButton}>
                            Add Coupon
                        </Button>
                    </Grid>
                </Grid>

                <Divider className={classes.divider} variant="fullWidth"/>

                {coupons && coupons.length === 0 ? (
                    <Box>
                        <Typography color="textSecondary" align="center" variant="h6" className={classes.empty}>
                            No coupons available
                        </Typography>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow hover={true}>
                                    <TableCell>#</TableCell>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Percentage</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Date Created</TableCell>
                                    <TableCell>Date Updated</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coupons && coupons.map((coupon, index) => {
                                    return (
                                        <TableRow key={coupon._id} hover={true}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{coupon.code}</TableCell>
                                            <TableCell>{coupon.percentage}%</TableCell>
                                            <TableCell>{coupon.status}</TableCell>
                                            <TableCell>{moment(coupon.createdAt).fromNow()}</TableCell>
                                            <TableCell>{moment(coupon.updatedAt).fromNow()}</TableCell>
                                            <TableCell>
                                                <Grid container={true} spacing={1} alignItems="center">
                                                    <Grid item={true}>
                                                        <Visibility className={classes.viewIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit className={classes.editIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete className={classes.deleteIcon}/>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </Layout>
    )
}

export default CouponsPage;