import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  withStyles,
} from "@material-ui/core";
import { CharacterBox } from "../../components/character-box/CharacterBox";
import { createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { red, purple, lightGreen } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { useCharacterListStyle } from "./CharacterListStyles";
import { useQuery } from "react-query";
import { requests } from "../../utils/requests";
import { ErrorCard } from "../../components/error/ErrorCard";
import { Loading } from "../../components/loading/Loading";
import { Navbar } from "../../components/navbar/Navbar";

const StyledLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    colorPrimary: {
      backgroundColor: red[500],
    },
    bar: {
      backgroundColor: lightGreen[500],
    },
  })
)(LinearProgress);

export function CharacterList() {
  const classes = useCharacterListStyle();
  const { isLoading, error, data: characters } = useQuery<any>(
    "character-list-list-all",
    () => requests.LIST_ALL()
  );



  const items = React.useMemo(() => {
    if(isLoading || !characters) return [];
    const getPercentage = (positive: any, negative: any) =>
      (positive * 100) / (positive + negative);
    const createListItem = (character: any) => {
      const normalise = (value: any) =>
        (value * 100) /
        (character.ratings.positive + character.ratings.negative);
      return (
        <ListItem
          divider
          style={{ height: "fit-content", position: "relative" }}
        >
          <ListItemAvatar style={{ marginRight: 12 }}>
            <Avatar
              variant="rounded"
              src={character.src}
              style={{ width: 200, height: 250 }}
            />
          </ListItemAvatar>
          <div
            style={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <Typography
                variant="h5"
                component="h2"
                children={character.name}
              />
              <Typography
                className={classes.pos}
                color="textSecondary"
                children={character.anime}
              />
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
                children={character.description}
              />
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle2"
                  style={{ color: lightGreen[500] }}
                  children={character.ratings.positive}
                />
                <Typography
                  variant="subtitle2"
                  style={{ color: red[500] }}
                  children={character.ratings.negative}
                />
              </div>

              <StyledLinearProgress
                variant="determinate"
                value={normalise(character.ratings.positive)}
              />
            </div>
          </div>
        </ListItem>
      );
    };

    return (characters || [])
      .sort((a: any, b: any) => {
        const a_perc = getPercentage(a.ratings.positive, a.ratings.negative);
        const b_perc = getPercentage(b.ratings.positive, b.ratings.negative);
        if (a_perc > b_perc) return -1;
        if (a_perc < b_perc) return 1;
        return 0;
      })
      .map(createListItem);
  }, [isLoading, characters]);

  if (error) return <ErrorCard error={error} />;
  if (isLoading) return <Loading />;
  if (!characters) return <ErrorCard />;

  return (
    <div className={classes.root}>
      <List style={{ width: "100%" }} children={items} />
    </div>
  );
}
