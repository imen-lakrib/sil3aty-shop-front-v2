import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  selectFilterProducts,
} from "../../redux/slices/filterSlice";
import BarFilter from "./BarFilter";
import ProductItem from "./ProductItem";
import ProductCart from "../../theme/carts/ProductCart";

function ProductsList({ products }) {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

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
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // variable of page
  // page number wich is count

  let numberOfPages = Math.ceil(products.length / productsPerPage);

  const handleChange = (event, value) => {
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
            {currentProducts.map((product, index) => {
              return <ProductCart  data={product} />;
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
