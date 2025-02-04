import React, { useState, useEffect } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProduct } from "../context/ProductContext";
import Pagination from "@mui/material/Pagination";

const ProductPage = ({ searchQuery }) => {
  const { products, categories } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12); // Number of products per page
  
  useEffect(() => {
    let filtered = products;
    if (searchQuery) {
      filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIdx = (page - 1) * perPage;
  const endIdx = startIdx + perPage;
  const displayedProducts = filteredProducts.slice(startIdx, endIdx);

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {displayedProducts.length === 0 ? (
          <CircularProgress />
        ) : (
          displayedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default ProductPage;
