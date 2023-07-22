import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogContent, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '@mui/icons-material';
import API_URL from '../../routes/Api';
import axios from 'axios';
import Loader from '../../utils/Loader/Loader.jsx'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ADD_TO_WISHLIST } from '../../redux/slices/wishListSlice.js';
import { ADD_TO_CART } from '../../redux/slices/cartSlice.js';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const ProductItem = ({ product, grid }) => {
    const [isLOading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    // Quiq view:

    const [openQuiqView, setOpenQuiqView] = useState(false);
    const handleClickOpenQuiqView = () => {
        setOpenQuiqView(true);
    };


    const handleCloseQuiqView = () => {
        setOpenQuiqView(false);
    };
    // add to wishlist
    const addToWishLIst = async (product) => {
        try {

            console.log('clickeeeed')

            setIsLoading(true)
            const newItem = {
                productName: product.name,
                quantity: 1,
                productImage: product.images[0].url || 'https://www.google.com',
                productPrice: product.price,
                productId: product._id,
            };

            // Make the API request if needed
            const response = await axios.post(`${API_URL}cart/add`, newItem, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });



            if (response.data.success == true) {
                // Dispatch the addToCart action with the new item
                dispatch(ADD_TO_WISHLIST(response.data));
                toast.success("successfully added to wishlist")
                setIsLoading(false)



            }
            toast.error(response.success)
            setIsLoading(false)






        } catch (error) {
            setIsLoading(false)
            toast.error(error)
        }
    };

    // add to cart : 
    const addToCart = async (product) => {
        try {
            setIsLoading(true)
            const newItem = {
                productName: product.name,
                quantity: 1,
                productImage: product.images[0].url || 'https://www.google.com',
                productPrice: product.price,
                productId: product._id,
            };



            // Make the API request if needed
            const response = await axios.post(`${API_URL}cart/addtocart`, newItem, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.data.success == true) {
                // Dispatch the addToCart action with the new item
                dispatch(ADD_TO_CART(response.data.cart));
                toast.success("successfully added to cart")
                setIsLoading(false)



            }
            toast.error(response.success)
            setIsLoading(false)




            // Handle the response if needed

        } catch (error) {
            // Handle error
            setIsLoading(false)
            toast.error(error)

        }
    };

 
  
    return (
        <>
            {grid ?
                <Card sx={{ maxWidth: 300 }}>

                    <Link to={`/product-details/${product._id}`}><CardMedia

                        component="img"
                        height="150"
                        image={product.images[0].url || 'https://www.google.com'}
                        alt={product.name}
                    /></Link>
                    <CardContent sx={{ py: 1 }}>
                        <Typography variant="h6" >
                            {`${product?.name}`.substring(0, 40).concat("..")}
                        </Typography>
                        <Typography variant="h6" color="secondary">
                            {`${product.price}`}.00$
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing >
                        <IconButton aria-label="add to favorites" onClick={() => addToWishLIst(product)}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" onClick={() => handleClickOpenQuiqView()}>
                            <VisibilityIcon />
                        </IconButton>

                        <ExpandMore
                        ><Button disabled={isLOading} onClick={() => addToCart(product)} color='primary'>
                                {isLOading ? (<Loader />) : (<Typography>Add To Cart</Typography>)}
                            </Button>

                        </ExpandMore>
                    </CardActions>
                </Card> :

                (
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" wrap>
                                    {`${product.name}`.substring(0, 80).concat("..")}
                                </Typography>
                                <Typography sx={{ width: "500px" }} flexWrap variant="subtitle1" color="text.secondary" component="div">
                                    {`${product.description}`.substring(0, 120).concat("..")}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, py: 1 }}>

                                <CardActions disableSpacing >
                                    <IconButton aria-label="add to favorites" onClick={() => addToWishLIst(product)} >
                                        <FavoriteIcon /> 
                                    </IconButton>
                                    <IconButton aria-label="share"
                                        onClick={() => handleClickOpenQuiqView()}
                                    >
                                        <VisibilityIcon />
                                    </IconButton>

                                    <ExpandMore
                                    ><Button disabled={isLOading} onClick={() => addToCart(product)} color='primary'>
                                            {isLOading ? (<Loader />) : (<Typography>Add To Cart</Typography>)}
                                        </Button>

                                    </ExpandMore>
                                </CardActions>

                            </Box>
                        </Box>
                        <Link to={`/product-details/${product._id}`}><CardMedia

                            component="img"
                            sx={{ width: "100%" }}
                            image={product.images[0].url || 'https://www.google.com'}
                            alt={product.name}
                        /></Link>
                    </Card>
                )
            }

            {/*  Quiq View model*/}
            <Dialog
                fullWidth
                maxWidth="md"
                open={openQuiqView}
                onClose={handleCloseQuiqView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogContent sx={{ padding: "10px 20px" }}>
                    <Grid Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <Card sx={{ width: { xs: "250px", sm: "200px", md: "300px" } }}>
                                <img alt={product.name} style={{ width: "100%" }} src={product.images[0].url} />

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card >
                                <CardContent> <Typography component="div" variant="h4">
                                    {product.name}
                                </Typography>
                                    <Typography variant="body2">
                                        {`${product.description}`.substring(0, 200).concat("..")}
                                    </Typography>

                                </CardContent>

                                <CardContent>

                                    {/* <Typography gutterBottom variant='h6'>Brand: <Chip size="small" label={product.brand} /></Typography> */}
                                    <Typography gutterBottom variant='h6'>Category: <Chip size="small" label={product.category} /></Typography>
                                    <Typography gutterBottom color='secondary' variant='h4'>${product.price}.00</Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                   
                                    <Button disabled={isLOading} onClick={() => addToCart(product)} color='primary'>
                                        {isLOading ? (<Loader />) : (<Typography>Add To Cart</Typography>)}
                                    </Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    </Grid>



                </DialogContent>
            </Dialog>
            {/*Quiq View */}

        </>
    )
}

export default ProductItem