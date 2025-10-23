import CasinoIcon from "@mui/icons-material/Casino";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Icon, Paper, Stack, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";

const boxStyle = (theme: Theme) => ({
  bgcolor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,
  py: { xs: 1, sm: 1.5 },
  px: 2,
  minWidth: { xs: 96, sm: 110 },
  transition: "transform 200ms ease, background-color 300ms ease",
});

const CategoryBar = ({
  activeFavourite,
  onToggleFavourite,
  activeBoosted,
  onToggleBoosted,
  activeParlay,
  onToggleParlay,
}: {
  activeFavourite: boolean;
  onToggleFavourite: () => void;
  activeBoosted: boolean;
  onToggleBoosted: () => void;
  activeParlay: boolean;
  onToggleParlay: () => void;
}) => {
  return (
    <Box>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Paper
          onClick={onToggleFavourite}
          sx={(theme) => ({
            ...boxStyle(theme),
            bgcolor: activeFavourite
              ? theme.palette.primary.main
              : theme.palette.background.paper,
          })}
        >
          <Icon component={LocalFireDepartmentIcon} />
          <Typography variant="caption">FAVOURITES</Typography>
        </Paper>

        <Paper
          onClick={onToggleBoosted}
          sx={(theme) => ({
            ...boxStyle(theme),
            bgcolor: activeBoosted
              ? theme.palette.primary.main
              : theme.palette.background.paper,
          })}
        >
          <Icon component={RocketLaunchIcon} />
          <Typography variant="caption">SLOTS</Typography>
        </Paper>
        <Paper
          onClick={onToggleParlay}
          sx={(theme) => ({
            ...boxStyle(theme),
            bgcolor: activeParlay
              ? theme.palette.primary.main
              : theme.palette.background.paper,
          })}
        >
          <Icon component={CasinoIcon} />
          <Typography variant="caption">JACKPOTS</Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default CategoryBar;
