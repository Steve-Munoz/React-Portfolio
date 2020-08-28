import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import Linkedin from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Linkedin />}
        target="_blank"
        href="https://linkedin.com/in/stevemunoz"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub />}
        target="_blank"
        href="https://github.com/Steve-Munoz"
      />
    </BottomNavigation>
  );
}
export default Footer;
