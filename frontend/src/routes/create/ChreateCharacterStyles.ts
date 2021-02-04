import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useCreateCharacterStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: "100%",
      height: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 50,
      alignItems: "flex-end",
      position: "relative"
    },
    inputs: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "fit-content",
      width: 400,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    textField: {
      // width: '100%',
      // marginBottom: theme.spacing(1),
      // marginTop: theme.spacing(1)
    },
    addButton: {
      marginTop: 10
    }
  });
});
