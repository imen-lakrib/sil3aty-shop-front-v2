import { Box, Button, Card, FormControl, FormLabel, MenuItem, Select, Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../redux/slices/filterSlice'
import { selectMaxPrice, selectMinPrice } from '../../redux/slices/productSlice'
import CustomButton from '../../theme/CustomButton'

const ProductFilter = ({ products }) => {
    // filter by category
    const dispatch = useDispatch()
    const [category, setCategory] = useState("All")
    const allCategories = [
        "All",
        ...new Set(products.map(product => product.category))
    ]

    const filterProducts = (cat) => {
        setCategory(cat)
        dispatch(FILTER_BY_CATEGORY({ products, category: cat }))
    }

    // filter by brand
    const [brand, setBrand] = useState("All")

    useEffect(() => {
        dispatch(FILTER_BY_BRAND({ products, brand }))
    }, [dispatch, products, brand])

    // filter by price:
    const minPrice = useSelector(selectMinPrice)
    const maxPrice = useSelector(selectMaxPrice)
    const [price, setPrice] = useState(maxPrice)

    useEffect(() => {
        dispatch(FILTER_BY_PRICE({ products, price }))
    }, [dispatch, products, price])

    // clear all filters
    const clearFilters = () => {
        setCategory("All")
        setBrand("All")
        setPrice(maxPrice)
    }

    return (
        <Box sx={{ p: 2, color: "white" }} >
            <FormLabel sx={{color:"secondary.contrastText", fontSize:"20px", fontWeight:600}}  id="demo-radio-buttons-group-label">Products Filter</FormLabel>
            <Box py={2} >
                <FormControl>
                    <FormLabel sx={{color:"secondary.contrastText", fontSize:"20px", fontWeight:600}} id="demo-radio-buttons-group-label">Category:</FormLabel>
                    {allCategories.map((cat, index) => (
                        <Button
                            sx={{
                                color: cat === category ? "#1953D1" : "white",
                            }}
                            key={index}
                            onClick={() => filterProducts(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </FormControl>
            </Box>
            <Box p={2} >
                <FormLabel sx={{color:"secondary.contrastText", fontSize:"20px", fontWeight:600}}  id="demo-radio-buttons-group-label">Price:</FormLabel>
                <Slider
                    sx={{
                        color: "white",
                        "& .MuiSlider-thumb": {
                            backgroundColor: "white",
                        },
                        "& .MuiSlider-valueLabel": {
                            color: "white",
                        },
                    }}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min={minPrice}
                    max={maxPrice}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                />
            </Box>
            <CustomButton backgroundColor="#ffffff" color="primary" variant="text" fontSize="10px" onClick={clearFilters} >Clear Filter</CustomButton>
        </Box>
    )
}

export default ProductFilter
