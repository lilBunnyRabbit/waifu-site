import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useHomeStyle = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 70
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      width: "80%"
    }
  });
});
