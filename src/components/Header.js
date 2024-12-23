import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, userFirstName, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePromos = () => {
    handleMenuClose();
    navigate("/promos");
  };

  return (
    <AppBar position="static" style={{ background: "#123456" }}>
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }} // Hidden on larger screens
          >
            <MenuIcon />
          </IconButton>

          {/* Flight icon next to the brand name */}
          <FlightTakeoffIcon
            style={{
              color: "gold",
              marginRight: "8px",
              verticalAlign: "bottom",
            }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Amalis Fly{/* Nouveau nom de l'entreprise */}
            </Link>
          </Typography>

          {isLoggedIn ? (
            <div onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
              <Button color="inherit">{userFirstName}</Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
              >
                <MenuItem onClick={handlePromos}>Promotions</MenuItem> {/* Traduction */}
                <MenuItem onClick={onLogout}>Déconnexion</MenuItem> {/* Traduction */}
              </Menu>
            </div>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Se connecter {/* Traduction */}
            </Button>
          )}

          {/* Admin Login Button */}
          <Button color="inherit" component={Link} to="/admin-login">
            Connexion Admin {/* Traduction */}
          </Button>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
