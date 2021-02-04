import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Reducers } from "../redux/reducer";
import { ConfigState } from "../redux/reducers/configReducer";

import HomeIcon from "@material-ui/icons/Home";

import { Home } from "./home/Home";
import { Game } from "./game/Game";
import { CreateCharacter } from "./create/CreateCharacter";
import { CharacterList } from "./character-list/CharacterList";
import { Admin } from "./admin/Admin";

export type RouteConfig = {
  name: string;
  path: string;
  element: any;
  permission?: string;
  icon: any;
};

export const routesConfigs: RouteConfig[] = [
  {
    name: "Home",
    path: "/",
    element: Home,
    icon: HomeIcon,
  },
  {
    name: "Game",
    path: "/game",
    element: Game,
    icon: HomeIcon,
  },
  {
    name: "Create",
    path: "/create",
    element: CreateCharacter,
    icon: HomeIcon,
  },
  {
    name: "List",
    path: "/list",
    element: CharacterList,
    icon: HomeIcon,
  },
  {
    name: "Admin",
    path: "/admin",
    element: Admin,
    icon: HomeIcon,
  }
];

export const getRoutes = (config?: ConfigState): RouteConfig[] => {
  return routesConfigs;
};

export const getRoute = (path: string): RouteConfig | undefined => {
  return routesConfigs.find((routeConfig) => routeConfig.path === path);
}

export function Routes() {
  const config: ConfigState = useSelector((state: Reducers) => state.config);

  return (
    <Switch>
      {getRoutes(config).map((routesConfig) => (
        <Route
          exact
          path={routesConfig.path}
          children={<routesConfig.element />}
        />
      ))}
    </Switch>
  );
}
