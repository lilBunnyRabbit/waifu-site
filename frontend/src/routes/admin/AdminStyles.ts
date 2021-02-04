import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useCharacterListStyle = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      overflowY: "auto"
    },
    pos: {
      marginBottom: 12,
    },
    description: {
      textAlign: "justify",
      marginBottom: 12,
    },
  });
});
