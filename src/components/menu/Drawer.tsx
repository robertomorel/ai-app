import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import { Dashboard as DashboardIcon, FitnessCenter as GymIcon, RemoveRedEyeSharp, Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../hooks/useAuth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItemText: {
    fontWeight: 'bold',
  },
  itensContainer: {
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
  },
}));

const SideDrawer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const { logout } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' },
    { text: 'Gym', icon: <GymIcon />, link: '/gym' },
    { text: 'Benefits', icon: <RemoveRedEyeSharp />, link: '/benefits' },
    // { text: 'Logout', icon: <ExitToApp />, link: '/' },
  ];

  const handleLogOut = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

  return (
    <div className={classes.root}>
      <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton color="inherit" aria-label="close drawer" onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <List style={{ paddingLeft: '.4rem', paddingRight: '.4rem' }}>
          {menuItems.map((item) => (
            <div className={classes.itensContainer}>
              <ListItem button key={item.text} component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} classes={{ primary: classes.listItemText }} />
              </ListItem>
            </div>
          ))}
          <div className={classes.itensContainer}>
            <ListItem button>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={'Logout'} classes={{ primary: classes.listItemText }} onClick={handleLogOut} />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
