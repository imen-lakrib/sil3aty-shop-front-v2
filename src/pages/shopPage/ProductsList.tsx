import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_SEARCH, SORT_PRODUCTS, selectFilterProducts } from '../../redux/slices/filterSlice'
import BarFilter from './BarFilter'
import ProductItem from './ProductItem'

function ProductsList({ products }) {
    const [grid, setGrid] = useState(true)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("latest")

    //
    const filtredProducts = useSelector(selectFilterProducts)

    const dispatch = useDispatch()
    // filter by search
    useEffect(() => {
        dispatch(FILTER_BY_SEARCH({ products, search }))

    }, [dispatch, products, search])
    // filter by sort
    useEffect(() => {
        dispatch(SORT_PRODUCTS({ products, sort }))

    }, [dispatch, products, sort])

    //pagination:
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(6)
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filtredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    // variable of page
    // page number wich is count 

    let numberOfPages = Math.ceil(products.length / productsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };


    return (
        <Box>


            <BarFilter filtredProducts={filtredProducts} setGrid={setGrid} search={search} setSearch={setSearch} sort={sort} setSort={setSort} />

            <Grid container spacing={1} id="products" sx={{ my: 1 }}>
                {products.length === 0 ? (<Typography>there is no product to show</Typography>) :
                    (currentProducts.map((product, index) => {
                        return (
                            <Grid key={index} item xs={grid ? 12 : 12} sm={grid ? 6 : 12} md={grid ? 6 : 12} lg={grid ? 4 : 12}><ProductItem product={product} grid={grid} /></Grid>

                        )
                }))}

            

            </Grid>
            <Stack sx={{ alignItems: "center" }} >
                <Pagination page={currentPage} onChange={handleChange} count={numberOfPages} color="primary" />
            </Stack>


        </Box>
    )
}

export default ProductsList