import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';    
import { useSelector } from "react-redux";

function Header() {

  const items = useSelector(state=>state.cart.items)
  const baskets = items.length;

  console.log(baskets)

    return (
        <div className="header">
          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          </Link>
            

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{baskets}</span>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Header
