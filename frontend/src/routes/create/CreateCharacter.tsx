import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import { CharacterBox } from "../../components/character-box/CharacterBox";
import { createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useCreateCharacterStyles } from "./ChreateCharacterStyles";

export function CreateCharacter() {
  const classes = useCreateCharacterStyles();
  const [character, setCharacter] = React.useState<any>({
    name: "",
    anime: "",
    description: "",
    src: "",
  });
  
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.inputs}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          color="textSecondary"
          children="Waifu Builder"
        />
        <TextField
          label="Image"
          defaultValue=""
          className={classes.textField}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e: any) =>
            setCharacter({ ...character, src: e.target.value })
          }
        />
        <TextField
          label="Name"
          defaultValue=""
          className={classes.textField}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e: any) =>
            setCharacter({ ...character, name: e.target.value })
          }
        />
        <TextField
          label="Anime"
          defaultValue=""
          className={classes.textField}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e: any) =>
            setCharacter({ ...character, anime: e.target.value })
          }
        />
        <TextField
          label="Description"
          defaultValue=""
          className={classes.textField}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rowsMax={6}
          rows={6}
          onChange={(e: any) =>
            setCharacter({ ...character, description: e.target.value })
          }
        />
        <Button 
          className={classes.addButton}
          variant="outlined"
          color="primary"
          children="Add"
          onClick={() => setCharacter({})}
        />
      </Paper>
      <CharacterBox character={character} />
    </div>
  );
}
