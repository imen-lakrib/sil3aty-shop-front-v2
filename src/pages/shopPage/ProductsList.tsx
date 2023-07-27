import { Box, Pagination, Stack, Typography } from "@mui/material";
import  { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  selectFilterProducts,
} from "../../redux/slices/filterSlice";
import BarFilter from "./BarFilter";
import ProductCart from "../../theme/carts/ProductCart";



interface Product {
  // Add properties based on the actual structure of your product objects
  // For example:
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
}

interface ProductsListProps {
  products: Product[]; // Specify that the products prop is an array of Product objects
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  console.log(grid)

  //
  const filtredProducts = useSelector(selectFilterProducts);

  const dispatch = useDispatch();
  // filter by search
  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);
  // filter by sort
  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);

  //pagination:
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  console.log(setProductsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // variable of page
  // page number wich is count

  const numberOfPages = Math.ceil(products.length / productsPerPage);

  const handleChange = (value:any) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      <BarFilter
        filtredProducts={filtredProducts}
        setGrid={setGrid}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <Box>
        {products.length === 0 ? (
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
            {currentProducts.map((product:any, index:any) => {
              return <ProductCart key={index}  data={product} />;
            })}
          </Box>
        )}
      </Box>
      <Stack sx={{ alignItems: "center" }}>
        <Pagination
          page={currentPage}
          onChange={handleChange}
          count={numberOfPages}
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default ProductsList;