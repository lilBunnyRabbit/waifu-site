import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { createAppTheme, useAppStyles } from "./AppStyle";
import { Reducers } from "./redux/reducer";
import { configConstants } from "./redux/reducers/configReducer";
import { Routes } from "./routes/Routes";
import { Navbar } from "./components/navbar/Navbar";

export default function App() {
  const config = useSelector((state: Reducers) => state.config);
  const MemoBase = React.useMemo(() => Base, []);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   const handleResizeEvent = (event: any) => handleResize(event.target);

  //   const handleResize = (target: any) => {
  //     const orientation =
  //       target.screen.orientation.angle == 0 ? "portrait" : "landscape";
  //     if (orientation != config.orientation) {
  //       console.log("setting orientation");

  //       dispatch({
  //         type: configConstants.SET_ORIENTATION,
  //         payload: orientation,
  //       });
  //     }
  //   };

  //   handleResize(window);
  //   window.addEventListener("orientationchange", handleResizeEvent);
  //   window.addEventListener("resize", handleResizeEvent);
  // }, []);

  return (
    <Router>
      <MemoBase children={<Routes />} />
    </Router>
  );
}

function Base({ children }: any) {
  const config = useSelector((state: Reducers) => state.config);
  const classes = useAppStyles();

  return (
    <ThemeProvider theme={createAppTheme(config.theme)}>
      <CssBaseline />
      <Navbar />
      <div className={classes.root} children={children} />
    </ThemeProvider>
  );
}
