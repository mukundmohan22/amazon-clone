import React from 'react'
import "./Header.css"
import logo from "../../Resources/images/logo.png"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from '../../Context/StateContext';
import { auth } from '../FirebaseConfig/firebase';


const Header = () => {
  const [{ basket, user }] = useStateValue();
  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <MenuIcon className="header__menu" fontSize="large" />
      <Link to="/">
        <img src={logo} alt="Amazon Logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={signOut} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/ " className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
