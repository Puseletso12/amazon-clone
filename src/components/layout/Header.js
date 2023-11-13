import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingContext from "../../context/shopping/shoppingContext";
import "./Header.css";

const Header = () => {
  // const shoppingContext = useContext(ShoppingContext);
  // const { basket, user } = shoppingContext;

  // const handleAuthentication = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={"/login"}>
          <div className="header_option">
            <span className="header_optionOne">
              Hello 
            </span>
            <span className="header_optionTwo">
              {/* {user ? "Sign Out" : "Sign In"} */}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;



// {!user ? "Guest" : user.email}

// !user && 
// onClick={handleAuthentication}