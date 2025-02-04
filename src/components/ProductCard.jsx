import { Card, CardMedia, CardContent, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import './Productcard.css';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to manage Snackbar visibility

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    setOpenSnackbar(true); // Show Snackbar
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar
  };

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    },
  };

  const mediaStyles = {
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  return (
    <>
      <Card className="product-card" style={cardStyles}>
        {/* Product Image */}
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>

        <CardMedia
          style={mediaStyles}
          component="img"
          image={product.image}
          alt={product.title}
        />
</Link>
        <CardContent style={{ paddingBottom: "50px" }}>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body1">${product.price}</Typography>
        </CardContent>

        {/* Fixed Position "Add to Cart" Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddToCart(product)}
          style={{
            position: "absolute",
            bottom: "10px",  // Adjust based on your card height
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",  // Adjust the button width if needed
            backgroundColor: '#2AB4B8',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1c9c9e',
            },
          }}
        >
          Add to Cart
        </Button>
      </Card>

      {/* Snackbar for "Item Added to Cart" */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Snackbar will auto-close after 3 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position Snackbar at the top
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ backGroundColor:'green',width: '100%' }}>
          {product.title} has been added to your cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
