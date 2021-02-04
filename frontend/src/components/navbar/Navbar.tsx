import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useNavbarStyle } from "./NavbarStyles";
import { Paper } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { getRoute } from "../../routes/Routes";

export function Navbar() {
  const location = useLocation();
  const classes = useNavbarStyle();

  return (
    <Paper square elevation={3} className={classes.root}>
      <Typography variant="h3">
        <Link to="/" children={getRoute(location.pathname)?.name} style={{
          color: "white",
          textDecoration: "none"
        }} />
      </Typography>
    </Paper>
  );
}
