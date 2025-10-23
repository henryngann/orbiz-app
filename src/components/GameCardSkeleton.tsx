import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const GameCardSkeleton = () => {
  return (
    <>
      <Card sx={{ minWidth: { sm: 200, md: 225 } }}>
        <CardActionArea>
          <CardMedia sx={{ height: 160 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </CardMedia>
        </CardActionArea>
      </Card>

      <Stack spacing={1}>
        <Stack direction="row" alignItems="center">
          <AutoAwesomeIcon sx={{ fontSize: 16, mr: 0.5, opacity: 0.6 }} />
          <Skeleton variant="text" width={140} height={24} />
        </Stack>

        <Skeleton variant="text" width={100} height={18} />

        <Stack direction="row">
          <Skeleton
            variant="rounded"
            width={72}
            height={24}
            sx={{ mt: 0.5, borderRadius: 999 }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default GameCardSkeleton;
