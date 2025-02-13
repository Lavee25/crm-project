import React from 'react';
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Button,
  Box,
  Avatar,
  Dialog,
  DialogContent,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Add as AddIcon,
  FormatListBulleted,
  Person,
  Search as SearchIcon,

} from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import authHelper from '../helper/authhelper';
import AddCustomer from './AddCustomer';

import { useNavigate } from 'react-router-dom';

// Styles for search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function SearchAppBar({ onSearch, onKeyPress }) {

  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);


  const handleLogout = () => {
    authHelper.removeToken();
    window.location.href = '/adminLogin';
  };

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" onClick={() => navigate('/admin/inbox')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpenModal}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Customer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Tasks" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/admin/inbox/task-list')}>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Task List" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton onClick={() => navigate('/admin/inbox/customer-list')}>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Customer List" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchKeyPress = (e) => {

    const searchValue = e.target.value.trim();

    if (e.key === 'Enter') {

      onSearch(searchValue);
      if (searchValue === '') {
        onSearch(onKeyPress)
      }


    }
  }


  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginTop: '5px', marginBottom: '10px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </IconButton>
          <Search >
            <SearchIconWrapper  >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyPress}

            />
          </Search>
          <Tooltip title="Account&Settings" placement="right">
            <Avatar sx={{ marginLeft: 'auto',cursor: 'pointer' }} >
              <Person />
            </Avatar>
          </Tooltip>
          <Link to="/logout" style={{ color: 'black', textDecoration: 'none' }}>
            <Button variant="contained" color="success" size="small" onClick={handleLogout}>
              LogOut
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
  

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          <AddCustomer />
        </DialogContent>
      </Dialog>
    </Box>


  );
};