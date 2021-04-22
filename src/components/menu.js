import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuContainer } from "../styles/nav_styles";
// import menuIcon from "../images/menu_icon.png"
import MenuIcon from '@material-ui/icons/Menu';
// const menuIcon = require("../images/menu_icon.png");

const MobileMenu = ({pub_ancor, blog_link}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let options = [];
  if(pub_ancor){options.push("Paper")};
  if(blog_link){options.push("Blog")};

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  return (
    <MenuContainer>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options && options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </MenuContainer>
  );
}

export default MobileMenu;

// selected={option === 'Paper'}
