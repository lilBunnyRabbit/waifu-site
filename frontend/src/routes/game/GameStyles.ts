import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useGameStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 35,
    },
    title: {
        marginBottom: 30,
    },
    pairRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    card: {
      width: 345,
      transition: "transform 0.3s ease-in-out",
      '&:hover': {
        // transform: "scale(1.1)"
      },
    },
    split: {
      maxWidth: "100px",
      width: "10vw"
    },
    cardContent: {
      height: theme.spacing(24),
      overflow: "hidden"
    },
    cardName: {
    },
    cardTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    cardDescription: {
      textAlign: "justify",
    }
  });
});
