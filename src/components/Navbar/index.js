import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import StevePic from "../../images/stevePic.JPG";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSlider: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  stevePic: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  // {
  //   listIcon: <Contacts />,
  //   listText: "Contacts",
  // },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSlider}
      component="div"
      onCLick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.stevePic} src={StevePic} alt="Steve pic" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "white" }}>
              Steve Munoz
            </Typography>
            <RightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </RightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import "./style.css";

// function NavbarComp() {
//   return (
//     <Navbar
//       className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top"
//       expand="lg"
//     >
//       <Navbar.Brand href="#home">Steve Munoz</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//         <Nav>
//           <Nav.Link href="#home">About Me</Nav.Link>
//           <Nav.Link href="#link">Portfolio</Nav.Link>
//           <Nav.Link href="#link">Contact</Nav.Link>
//           <Nav.Link href="#link">Skills</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavbarComp;
