import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { CharacterBox } from "../../components/character-box/CharacterBox";
import { useGameStyles } from "./GameStyles";
import { useQuery } from "react-query";
import { requests } from "../../utils/requests";
import { ErrorCard } from "../../components/error/ErrorCard";
import { Loading } from "../../components/loading/Loading";

const toChunks = (array: any[], chunkSize: number = 2): any[][] => {
  const chunks = [];

  for (let i = 0, j = array.length; i < j; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
};

export function Game() {
  const classes = useGameStyles();
  const [chunks, setChunks] = React.useState<any[][]>();
  const [index, setIndex] = React.useState(0);
  const [newData, setNewData] = React.useState<any[]>([]);
  const [winner, setWinner] = React.useState<any>();
  const { isLoading, error, data } = useQuery<any>(
    "game-list-all",
    () => requests.LIST_ALL(),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );

  React.useEffect(() => {
    if (data) {
      if(data.length == 1) {
        setWinner(data[0]);
        console.log("One char -> winner");
        
      } else {
        setChunks(toChunks(data || []));
        console.log("Start chunks", chunks);
      }
    }
  }, [isLoading]);

  if (error) return <ErrorCard error={error} />;
  if (isLoading) return <Loading />;
  if (!chunks) return <ErrorCard error={{ message: "No chunks" }} />;

  if (!winner && (index >= chunks.length || chunks[index]?.length < 2)) {
    setIndex(0);
    if(chunks[index]?.length < 2) setChunks(toChunks([...newData, chunks[index][0]]));
    else setChunks(toChunks(newData || []));
    setNewData([]);

    console.log("New chunks", chunks);
  }

  const handleSelect = (selected: any, notSelected: any) => {
    if (chunks?.length == 1) {
      setWinner(selected);
    } else {
      setIndex(index + 1);
      setNewData([...newData, selected]);
    }
  };

  if (!chunks || !chunks[index] || chunks[index].length < 2)
    return <ErrorCard />;

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
        children={
          winner
            ? winner?.name
            : `${index} / ${chunks.length}`
        }
      />
      {winner && <CharacterBox character={winner} />}
      {!winner && (
        <SelectFromPair pair={chunks[index]} onSelect={handleSelect} />
      )}
    </div>
  );
}

function SelectFromPair({ pair, onSelect }: any) {
  const classes = useGameStyles();
  return (
    <div className={classes.pairRow}>
      <div>
        <CharacterBox character={pair[0]} onClick={() => onSelect(pair[0], pair[1])} />
      </div>
      <div className={classes.split} />
      <div>
        <CharacterBox character={pair[1]} onClick={() => onSelect(pair[1], pair[0])} />
      </div>
    </div>
  );
}
