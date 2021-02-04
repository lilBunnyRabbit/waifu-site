import React from "react";
import { useHomeStyle } from "./HomeStyle";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, withStyles } from "@material-ui/core";
import { CharacterBox } from "../../components/character-box/CharacterBox";
import { createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { red, purple } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { getRoutes, routesConfigs } from "../Routes";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    borderColor: purple[500],
    "&:hover": {
      borderColor: purple[700],
    },
  },
}))(Button);

export function Home() {
  const classes = useHomeStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={6} className={classes.grid}>
        {getRoutes().map((routeConfigs) => (
          <Grid item xs={6}>
            <Link to={routeConfigs.path} style={{ textDecoration: "none" }}>
              <Paper style={{ width: "100%", height: "100%" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  children={routeConfigs.name}
                  style={{ width: "100%", height: "100%", padding: 20 }}
                />
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
