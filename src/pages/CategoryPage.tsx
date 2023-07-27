import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../redux/slices/productSlice';
import { Box, Container, Typography } from '@mui/material';
import ProductCart from '../theme/carts/ProductCart';

const CategoryPage = () => {
  const products = useSelector(selectProducts);
  const { category } = useParams();

  // Filter products based on the category
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <Container sx={{ py: 2 }}>
        <Typography variant="h2" sx={{ color: "secondary.contrastText"}}>{`Category: ${category}`}</Typography>
      {filteredProducts.length === 0 ? (
        <Box
        sx={{
          color: "secondary.contrastText",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "450px" }}
          src="/no-cart2.gif"
          alt="no product"
        />
        <Typography variant="h2">There is no product to show</Typography>
      </Box>
      ) : (
        <Box  sx={{ display: "flex", flexWrap:"wrap" }}>

          {filteredProducts.map((product) => (
              <ProductCart  data={product} />
          ))}
        </Box>
      )}
    </Container>

    
  );
};

export default CategoryPage;
