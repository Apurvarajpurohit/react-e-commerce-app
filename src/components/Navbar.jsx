import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext"; 
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = ({ onSearch }) => {
  const { user, signInWithGoogle, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <AppBar position="static" className="navbar" >
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" className="logo">
          E-Commerce
        </Typography>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          onChange={onSearch}
          className="search-bar"
        />

        {/* Cart Icon with Badge, linking to Cart Page */}
        <IconButton edge="end" color="inherit" aria-label="cart" component={Link} to="/cart" className="cart-icon">
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        {/* Login / Logout Button */}
        {user ? (
          <>
            <Typography variant="body1" className="user-name">
              {user.displayName}
            </Typography>
            <Button  style={{fontWeight:700,marginLeft:'40px'}} color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button style={{fontWeight:700,marginLeft:20}}  color="inherit" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
