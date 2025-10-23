import { Game } from "@/types/game";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card
        component="article"
        sx={{
          transition: "transform 200ms ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardActionArea aria-label={`Play ${game.title} by ${game.provider}`}>
          <CardMedia
            component="img"
            height="160"
            image={game.image}
            alt={`${game.title} by ${game.provider}`}
            sx={{ objectFit: "cover" }}
          />
        </CardActionArea>
      </Card>
      <Stack spacing={1} sx={{ mt: 1 }}>
        <Stack direction="row" alignItems="center">
          <AutoAwesomeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body1" aria-label={game.title}>
            {game.title}
          </Typography>
        </Stack>
        <Typography variant="subtitle2" color="text.secondary">
          {game.provider}
        </Typography>
        <Stack direction="row">
          <Chip
            sx={{ mt: 0.8 }}
            label={game.category}
            size="small"
            color="primary"
            variant="outlined"
            aria-label={`Category: ${game.category}`}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default GameCard;
