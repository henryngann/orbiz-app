import { Game } from "@/types/game";
import { Alert, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = ({
  games,
  loading,
  error,
  searchQuery,
}: {
  games: Game[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}) => {
  //If loading is true, build a placeholder array
  //otherwise, use our mock data
  const items = loading
    ? Array.from({ length: 10 }, (_, i) => ({ id: i }))
    : games;

  if (error) {
    return (
      <>
        <Alert severity="error" sx={{ alignItems: "center" }}>
          {error}
        </Alert>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </>
    );
  }
  //If its not loading and there are no games
  //show a friendly no results message
  if (!loading && games.length === 0) {
    return (
      <Box
        sx={(theme) => ({
          textAlign: "center",
          color: theme.palette.text.secondary,
        })}
      >
        <Typography variant="h5" gutterBottom>
          Doh! Can&apos;t find any games!
        </Typography>
        <Typography variant="body2">
          Try another filter on the right, or clear your search terms.
        </Typography>
      </Box>
    );
  }
  return (
    <Grid container spacing={2}>
      {items.map((it) => (
        <Grid key={it.id} size={{ xs: 6, sm: 4, md: "auto" }}>
          {loading ? <GameCardSkeleton /> : <GameCard game={it as Game} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default GamesGrid;
