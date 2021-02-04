import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useNavbarStyle = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: "100%",
      height: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
});
