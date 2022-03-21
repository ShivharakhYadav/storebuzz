import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './Header.css';
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const pages = ['Home', "Today's Deal", 'Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
function Header() {
    const history = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {

        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function sendToLogin() {
        history("/login");
    }
    function sendToRegistration() {
        
        history("/registration");
    }
    const [findingUser, setFindedUserDetails] = React.useState([])
    function getDetails() {

        // fetch("https://retoolapi.dev/SdvQQz/data").then((results) => {
        //     console.log(results)
        //     results.json().then((res) => {
        //         if(res.Name==findingUser)
        //         {
        //             console.log(`id : ${res.id} and name :${res.Name}`)
        //         }
        //     })
        // })
    }
    getDetails();
    return (
        <>

            {
                localStorage.getItem("use-info") ?
                    <>

                        <AppBar position="static">
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                    >
                                    
                                    </Typography>
                                    <img src='images/Logo/logo2.png' style={{width:90}}/>
                                     <Typography variant="h4">StoreBuzz</Typography>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenNavMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>

                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                            sx={{
                                                display: { xs: 'block', md: 'none' },
                                            }}
                                        >
                                            {pages.map((page) => (
                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                    <Typography textAlign="center">{page}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"

                                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                    >
                                        LOGO
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                        {pages.map((page) => (
                                            <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </Box>

                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography  textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}

                                            <MenuItem className="changeColor">
                                                <Typography textAlign="center">profile</Typography><br />
                                                <Typography textAlign="center">Address</Typography><br />
                                                <Typography textAlign="center">Setting</Typography><br />
                                                <Typography textAlign="center">Logout</Typography>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                </Toolbar>
                            </Container>

                        </AppBar>

                    </>
                    :
                    <>
                        <AppBar position="static">
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                    >
                                        LOGO
                                    </Typography>

                                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenNavMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                            sx={{
                                                display: { xs: 'block', md: 'none' },
                                            }}
                                        >
                                            {pages.map((page) => (
                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                    <Typography textAlign="center">{page}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"

                                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                    >
                                        LOGO
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                        {pages.map((page) => (
                                            <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </Box>


                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <MenuItem className="changeColor">
                                                <Typography textAlign="center" onClick={sendToRegistration}>Registration</Typography><br />
                                                <Typography textAlign="center" onClick={sendToLogin}>login</Typography>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    </>
            }

        </>
    )
}
export default Header;