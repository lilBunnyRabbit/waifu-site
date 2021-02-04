import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useCharacterBoxStlye } from "./CharacterBoxStyle";

export function CharacterBox({ character, onClick, noContent, ...props }: any) {
  const classes = useCharacterBoxStlye();
  return (
    <Card raised className={classes.root} onClick={onClick} {...props}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=" No Image"
          height="300"
          image={character.src}
          title={character.name}
        />
        {!noContent && (
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h2" children={character.name + "   " + character._id} />

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
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
}
