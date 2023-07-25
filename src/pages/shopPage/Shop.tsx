import { Box, Grid } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slices/productSlice';
import ProductFilter from './ProductFilter';
import ProductsList from './ProductsList';


const Shop = () => {
  const products = useSelector(selectProducts)

  

  return (
    <Box sx={{margin:"50px 30px"}}>
      <Grid container spacing={1} >

        <Grid item xs={0} sm={0} md={2} sx={{ display: { xs: "none", md: "block" } }} >
          <ProductFilter products={products} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} >
          <ProductsList products={products} />
        </Grid>

      </Grid>
    </Box>
  )
}



export default Shop