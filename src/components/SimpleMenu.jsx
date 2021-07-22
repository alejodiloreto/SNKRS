import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Categorías
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/category/air-jordan`} className={classes.menuItem}>
          <MenuItem onClick={handleClose}>Air Jordan</MenuItem>
        </Link>
        <Link to={`/category/nike`} className={classes.menuItem}>
          <MenuItem onClick={handleClose}>Nike</MenuItem>
        </Link>
        <Link to={`/category/adidas`} className={classes.menuItem}>
          <MenuItem onClick={handleClose}>Adidas</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

const useStyles = makeStyles({
  button: {
    fontSize: '18px',
    listStyle: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    padding: 0,
    textTransform: 'none',
    letterSpacing: 'none',
    color: '#313131',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    lineHeight: 0,
    '&:hover': {
      color: '#b9b9b9',
    },
  },
  menuItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
