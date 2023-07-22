import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slices/productSlice';
import ProductFilter from './ProductFilter';
import ProductsList from './ProductsList';


const Shop = () => {
  const products = useSelector(selectProducts)
  console.log("produuuuuuuuuuuuuuuucts", products)

  

  return (
    <Container>
      <Grid container spacing={1} >

        <Grid item xs={0} sm={0} md={3} sx={{ display: { xs: "none", md: "block" } }} >
          <ProductFilter products={products} />
        </Grid>
        <Grid item xs={12} sm={12} md={9} >
          <ProductsList products={products} />
        </Grid>

      </Grid>
    </Container>
  )
}



export default Shop