import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useCharacterBoxStlye = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: 300,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    content: {
      height: theme.spacing(28),
      overflow: "hidden",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: theme.spacing(6.5),
      marginBottom: theme.spacing(1),
    },
    name: {
      margin: 0,
      padding: 0,
    },
    description: {
      textAlign: "justify",
    },
    pos: {
      marginBottom: 12,
    },
  });
});
