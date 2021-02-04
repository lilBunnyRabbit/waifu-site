import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
} from "@material-ui/core/styles";
import { lightBlue, cyan, lightGreen } from "@material-ui/core/colors";

export const createAppTheme = (theme: "dark" | "light") => {
  const select = (dark: any, light: any) => (theme === "dark" ? dark : light);
  return createMuiTheme({
    palette: {
      type: theme,
      primary: {
        main: select(lightBlue[500], cyan[500]),
      },
      secondary: {
        main: select(lightGreen[500], lightGreen[500]),
      },
    },
  });
};

export const useAppStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100%",
      height: "calc(100vh - 70px)",
      position: "relative",
    }
  });
});
