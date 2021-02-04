import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Paper,
  withStyles,
} from "@material-ui/core";
import { CharacterBox } from "../../components/character-box/CharacterBox";
import { createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { red, purple, lightGreen } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { useCharacterListStyle } from "./AdminStyles";
import { useQuery } from "react-query";
import { requests } from "../../utils/requests";
import { ErrorCard } from "../../components/error/ErrorCard";
import { Loading } from "../../components/loading/Loading";
import { Navbar } from "../../components/navbar/Navbar";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  ValueFormatterParams,
} from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";

export function Admin() {
  const classes = useCharacterListStyle();
  const [selectedCharacter, setSelectedCharacter] = React.useState<any>();
  const { isLoading, error, data: characters } = useQuery<any>(
    "character-list-list-all",
    () => requests.LIST_ALL()
  );

  if (error) return <ErrorCard error={error} />;
  if (isLoading) return <Loading />;
  if (!characters) return <ErrorCard />;

  const columns: ColDef[] = [
    {
      field: " ",
      headerName: " ",
      sortable: false,
      flex: 0,
      renderCell: (params: ValueFormatterParams) => (
        <IconButton
          color="primary"
          onClick={() => setSelectedCharacter(params.row)}
          children={<EditIcon />}
        />
      ),
    },
    {
      field: "src",
      headerName: "Src",
      headerAlign: "center",
      flex: 0,
      renderCell: (params: ValueFormatterParams) => (
        <Avatar
          variant="square"
          src={params.row.src}
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    { field: "id", headerName: "ID", flex: 0 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "anime", headerName: "Anime", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "ratings",
      headerName: "Ratings +/-",
      flex: 1,
      sortComparator: (v1: any, v2: any) => v1.positive - v2.positive,
      renderCell: (params: ValueFormatterParams) => (
        <p
          children={`${params.row.ratings.positive} / ${params.row.ratings.negative}`}
        />
      ),
    },
  ];

  const rows = characters.map((character: any, i: number) => ({
    ...character,
    id: i,
  }));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Modal
        open={!!selectedCharacter}
        onClose={() => setSelectedCharacter(undefined)}
        style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}
      >
        <div>
        <CharacterBox character={selectedCharacter} />
        </div>

      </Modal>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize={true}
        disableSelectionOnClick={true}
      />
    </div>
  );
}
