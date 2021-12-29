import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/trailMePic.JPG";
import project2 from "../images/Orchard.JPG";
import project3 from "../images/note-Taker.JPG";
import project4 from "../images/PicSome.jpg";
import Footer from "./Footer/index";
// import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mainContainer: {
    height: "100vh",
    paddingTop: "40px",
  },
  cardContainer: {
    maxWidth: 300,

    margin: "2rem auto",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" className={classes.mainContainer}>
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                image={project1}
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  TrailMe Locator
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://github.com/Group-3-Project-1/Trailme-Locator"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://group-3-project-1.github.io/Trailme-Locator/"
              >
                Deployed Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                image={project2}
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Orchard
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://github.com/group4project2/Orchard"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://orchard-application.herokuapp.com/"
              >
                Deployed Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                image={project3}
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Note Taker
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://github.com/Steve-Munoz/Note-Taker"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://steve-note-taker.herokuapp.com/"
              >
                Deployed Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
        

         {/* Project 4 */}
         <Grid item xs={12} sm={8} md={6} lg={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4-test"
                image={project4}
                height="150"
                padding-bottom ="100px"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Steve's Picture Gallery
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://github.com/Steve-Munoz/Steve-s-Picture-Gallery"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://steves-picture-gallery.herokuapp.com/"
              >
                Deployed Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    
    </Box>
  );
};

export default Portfolio;
