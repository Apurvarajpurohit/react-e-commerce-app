import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";

const ProductList = ({ category, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  // Filter products based on category and search query
  const filteredProducts = products.filter(p =>
    (!category || p.category === category) &&
    (!searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Paginate filtered products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        {currentItems.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

      {/* Pagination Controls */}
      <Pagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)} // Total number of pages
        page={currentPage}
        onChange={handlePageChange} // Handle page change
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
};

export default ProductList;
