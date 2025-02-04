import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  // Inline style objects
  const cardStyles = {
    maxWidth: "800px",
    margin: "40px auto",
    display: "flex",
    flexDirection: "row",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const cardMediaStyles = {
    width: "400px",
    height: "400px",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  };

  const cardContentStyles = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: "1",
  };

  const titleStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const priceStyles = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#EE3C2D",
    marginBottom: "20px",
  };

  const descriptionStyles = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
    flexGrow: "1",
  };

  const buttonStyles = {
    backgroundColor: "#2AB4B8",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const buttonHoverStyles = {
    backgroundColor: "#1A8C8F", // Slightly darker shade on hover
  };

  return (
    <Card style={cardStyles}>
      <CardMedia
        component="img"
        style={cardMediaStyles}
        image={product.image}
        alt={product.title}
      />
      <CardContent style={cardContentStyles}>
        <Typography style={titleStyles} variant="h5">{product.title}</Typography>
        <Typography style={priceStyles} variant="body1">${product.price}</Typography>
        <Typography style={descriptionStyles} variant="body2">{product.description}</Typography>
        <Button
          style={buttonStyles}
          onClick={() => addToCart(product)}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
