import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@material-ui/core";
import {Add, Delete, Edit, Visibility} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {brown, green, grey, red} from "@material-ui/core/colors";
import {Alert} from "@material-ui/lab";
import moment from "moment";
import CreateCouponDialog from "../../components/modals/coupons/create-coupon-dialog";
import DeleteDialog from "../../components/shared/delete-dialog";
import ViewCouponDetailDialog from "../../components/modals/coupons/view-coupon-detail-dialog";
import {getCoupons} from "../../redux/coupons/coupons-action-creators";
import UpdateCouponDialog from "../../components/modals/coupons/update-coupon-dialog";
import {useHistory} from "react-router-dom";

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
    const dispatch = useDispatch();

    const {token, loading: authLoading} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getCoupons(token));
    }, [dispatch, token]);

    const {coupons, loading, error} = useSelector(state => state.coupons);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedID, setSelectedID] = useState(null);

    const handleDeleteDialogOpen = () => {
        setOpenDeleteDialog(true);
    }

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    }

    const handleDeleteItemClick = id => {
        setSelectedID(id);
        handleDeleteDialogOpen();
    }

    const handleDelete = () => {
        if (selectedID !== "") {
            handleDeleteDialogClose();
        }
    }

    const [viewItemDialogOpen, setViewItemDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleViewItemDialogOpen = () => {
        setViewItemDialogOpen(true);
    }

    const handleViewItemDialogClose = () => {
        setViewItemDialogOpen(false);
    }
    const handleSelectedItem = item => {
        setSelectedItem(item);
        handleViewItemDialogOpen();
    }

    const [openCreateCouponDialog, setOpenCreateCouponDialog] = useState(false);

    const handleCreateCouponDialogOpen = () => {
        setOpenCreateCouponDialog(true);
    }

    const handleCreateCouponDialogClose = () => {
        setOpenCreateCouponDialog(false);
    }

    const [openUpdatedCouponDialog, setOpenUpdateCouponDialog] = useState(false);
    const [selectedUpdateCoupon, setSelectedUpdateCoupon] = useState(null);

    const handleUpdateCouponDialogOpen = () => {
        setOpenUpdateCouponDialog(true);
    }

    const handleUpdateCouponDialogClose = () => {
        setOpenUpdateCouponDialog(false);
    }

    const handleSelectedUpdateCoupon = coupon => {
        setSelectedUpdateCoupon(coupon);
        handleUpdateCouponDialogOpen()
    }

    const [page, setPage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }

    const [status, setStatus] = useState("All");
    const handleStatusChange = event => {
        setStatus(event.target.value);
    }

    const history = useHistory();

    useEffect(() => {
        if (!authLoading && !token) {
            history.push('/auth/login');
        }
    }, [history, authLoading, token]);

    return (
        <Layout>
            <Container className={classes.container}>
                {loading && <LinearProgress variant="query"/>}
                {error && <Alert
                    severity="error"
                    variant="outlined"
                    title="Error">
                    {error}
                </Alert>}
                <Grid container={true} justifyContent="space-between" alignItems="center" spacing={3}>
                    <Grid item={true} xs={12} md={4} lg={8}>
                        <Typography className={classes.title} color="textSecondary" variant="h4">
                            Coupons ({coupons && coupons.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Select
                            label="Select Status"
                            margin="dense"
                            fullWidth={true}
                            variant="outlined"
                            onChange={handleStatusChange}
                            defaultValue="All"
                            value={status}>
                            <MenuItem value="All">Select Status</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="expired">Expired</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Button
                            onClick={handleCreateCouponDialogOpen}
                            fullWidth={true}
                            startIcon={<Add/>}
                            variant="contained"
                            color="secondary"
                            className={classes.addButton}>
                            Add Coupon
                        </Button>
                    </Grid>
                </Grid>

                <Divider className={classes.divider} variant="fullWidth"/>
                {loading && <LinearProgress variant="query"/>}
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
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>End Date</TableCell>
                                    <TableCell>Date Created</TableCell>
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
                                            <TableCell>{moment(coupon.startDate).fromNow()}</TableCell>
                                            <TableCell>{moment(coupon.endDate).fromNow()}</TableCell>
                                            <TableCell>{moment(coupon.createdAt).fromNow()}</TableCell>
                                            <TableCell>
                                                <Grid container={true} spacing={1} alignItems="center">
                                                    <Grid item={true}>
                                                        <Visibility
                                                            onClick={() => handleSelectedItem(coupon)}
                                                            className={classes.viewIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit
                                                            onClick={() => handleSelectedUpdateCoupon(coupon)}
                                                            className={classes.editIcon}
                                                        />
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete
                                                            onClick={() => handleDeleteItemClick(coupon._id)}
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
                                    count={coupons.count}
                                    page={page}
                                    onPageChange={handlePageChange}
                                    rowsPerPage={10}
                                />
                            </TableFooter>
                        </Table>
                    </TableContainer>
                )}
            </Container>
            {openCreateCouponDialog &&
            <CreateCouponDialog
                handleCouponDialogClose={handleCreateCouponDialogClose}
                openCouponDialog={openCreateCouponDialog}
            />}

            {openDeleteDialog &&
            <DeleteDialog
                openDeleteDialog={openDeleteDialog}
                handleDialogClose={handleDeleteDialogClose}
                message="Are you sure you want to delete this coupon?"
                handleConfirmAction={handleDelete}
            />}

            {selectedItem &&
            <ViewCouponDetailDialog
                openViewCouponDialog={viewItemDialogOpen}
                handleCouponDialogClose={handleViewItemDialogClose}
                coupon={selectedItem}
            />}

            {selectedUpdateCoupon &&
            <UpdateCouponDialog
                openUpdateCouponDialog={openUpdatedCouponDialog}
                handleUpdateCouponDialogClose={handleUpdateCouponDialogClose}
                originalCoupon={selectedUpdateCoupon}
            />}
        </Layout>
    )
}

export default CouponsPage;