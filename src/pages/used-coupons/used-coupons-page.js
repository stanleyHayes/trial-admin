import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Divider,
    Grid,
    LinearProgress,
    makeStyles, MenuItem,
    Paper, Select, Table, TableBody, TableCell,
    TableContainer, TableFooter, TableHead, TablePagination, TableRow,
    Typography
} from "@material-ui/core";
import {brown, green, grey, red} from "@material-ui/core/colors";
import {Alert} from "@material-ui/lab";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import moment from "moment";
import {Delete, Edit, Info, Visibility} from "@material-ui/icons";


const UsedCouponsPage = () => {

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
                color: red['600'],
                cursor: 'pointer'
            },
            viewIcon: {
                color: green['600'],
                cursor: 'pointer'
            },
            editIcon: {
                color: grey['600'],
                cursor: 'pointer'
            },
            usedIcon: {
                color: brown['600'],
                cursor: 'pointer'
            }
        }
    });

    const classes = useStyles();

    const [page, setPage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }

    const {couponID} = useParams();

    const {usedCoupons, loading, error} = useSelector(state => state.usedCoupons);
    const [selectedUser, setSelectedUser] = useState({});
    const [selectedCoupon, setSelectedCoupon] = useState({});

    const handleUserSelect = user => {
        setSelectedUser(user);
    }

    const handleCouponSelect = coupon => {
        setSelectedCoupon(coupon);
    }

    return (
        <Layout>
            <Container className={classes.container}>
                {loading && <LinearProgress variant="query"/>}
                {error && <Alert variant="outlined" title="Error">{error}</Alert>}
                <Grid container={true} justifyContent="space-between" alignItems="center" spacing={3}>
                    <Grid item={true} xs={12} md={4} lg={8}>
                        <Typography className={classes.title} color="textSecondary" variant="h4">
                            Used Coupons ({usedCoupons && usedCoupons.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Select
                            label="Select User"
                            margin="dense"
                            fullWidth={true}
                            variant="outlined"
                            onChange={handleUserSelect}
                            defaultValue="All"
                            value={selectedUser._id}>
                            <MenuItem value="All">Select User</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="expired">Expired</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Select
                            label="Select Coupon"
                            margin="dense"
                            fullWidth={true}
                            variant="outlined"
                            onChange={handleCouponSelect}
                            defaultValue="All"
                            value={selectedCoupon.code}>
                            <MenuItem value="All">Select Coupon</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="expired">Expired</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} variant="fullWidth"/>

                {usedCoupons && usedCoupons.length === 0 ? (
                    <Box>
                        <Typography color="textSecondary" align="center" variant="h6" className={classes.empty}>
                            No used coupons for coupon with id ${couponID}
                        </Typography>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow hover={true}>
                                    <TableCell>#</TableCell>
                                    <TableCell>Coupon Code</TableCell>
                                    <TableCell>Percentage</TableCell>
                                    <TableCell>User</TableCell>
                                    <TableCell>Date Used</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usedCoupons && usedCoupons.map((usedCoupon, index) => {
                                    return (
                                        <TableRow key={usedCoupon._id} hover={true}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{usedCoupon.coupon.code}</TableCell>
                                            <TableCell>{usedCoupon.coupon.percentage}%</TableCell>
                                            <TableCell>{usedCoupon.user.name}</TableCell>
                                            <TableCell>{moment(usedCoupon.createdAt).fromNow()}</TableCell>
                                            <TableCell>
                                                <Grid container={true} spacing={1} alignItems="center">
                                                    <Grid item={true}>
                                                        <Visibility
                                                            // onClick={() => handleSelectedItem(coupon)}
                                                            className={classes.viewIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit
                                                            // onClick={() => handleSelectedUpdateCoupon(coupon)}
                                                            className={classes.editIcon}
                                                        />
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete
                                                            // onClick={() => handleDeleteItemClick(coupon._id)}
                                                            className={classes.deleteIcon}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TableFooter>
                                <TablePagination
                                    count={usedCoupons.count}
                                    page={page}
                                    onPageChange={handlePageChange}
                                    rowsPerPage={10}
                                />
                            </TableFooter>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </Layout>
    )
}

export default UsedCouponsPage;