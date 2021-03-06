import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../Navbar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#22333360",
    height: "100vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.265rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderCOlor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5 rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      testAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
    },
    heading: {
      color: "tomato",
      padding: "3rem 0",
      textTransform: "uppercase",
    },
    subheading: {
      color: "white",
      padding: "0",
      textTransform: "uppercase",
    },
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          {" "}
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016-2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              AllTerra Central
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              GIS Coordinator
            </Typography>
          </Box>

          {/* // break. This is a new year for the timeline */}

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Apple via Apex Systems
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              GIS Technician
            </Typography>
          </Box>

          {/* New year 2019-current */}

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-Current
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Aeparmia Engineering
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Utilities Specialist
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Resume;
