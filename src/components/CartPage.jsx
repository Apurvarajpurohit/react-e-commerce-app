import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Button, Typography, List, ListItem, ListItemText, Divider, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId); // Assuming removeFromCart is a function from CartContext
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '1800px', margin: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 600 }}>
        Your Cart
      </Typography>
      
      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray' }}>
          No items in your cart.
        </Typography>
      ) : (
        <List sx={{ padding: 0 }}>
          {cart.map((product) => (
            <div key={product.id}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', padding: '15px', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
                <Grid container spacing={2} alignItems="center">
                  {/* Product Details */}
                  <Grid item xs={8} sm={9}>
                    <ListItemText
                      primary={product.title}
                      secondary={`$${product.price}`}
                      primaryTypographyProps={{ fontWeight: '500' }}
                    />
                  </Grid>

                  {/* Remove Button */}
                  <Grid item xs={4} sm={3} sx={{ textAlign: 'right' }}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(product.id)}
                      sx={{ textTransform: 'none', fontWeight: 'bold', padding: '6px 15px' }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider sx={{ marginBottom: '10px' }} />
            </div>
          ))}
        </List>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            sx={{
              padding: '10px 25px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '30px',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#2AB4B8',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
