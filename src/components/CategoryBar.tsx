import CasinoIcon from "@mui/icons-material/Casino";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Stack } from "@mui/material";
import CategoryItem from "./CategoryItem";

const CategoryBar = ({
  activeFavourite,
  onToggleFavourite,
  activeBoosted,
  onToggleBoosted,
  activeJackpots,
  onToggleJackpots,
}: {
  activeFavourite: boolean;
  onToggleFavourite: () => void;
  activeBoosted: boolean;
  onToggleBoosted: () => void;
  activeJackpots: boolean;
  onToggleJackpots: () => void;
}) => {
  return (
    <Box>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <CategoryItem
          icon={LocalFireDepartmentIcon}
          label="FAVOURITES"
          isActive={activeFavourite}
          onClick={onToggleFavourite}
        />

        <CategoryItem
          icon={RocketLaunchIcon}
          label="SLOTS"
          isActive={activeBoosted}
          onClick={onToggleBoosted}
        />

        <CategoryItem
          icon={CasinoIcon}
          label="JACKPOTS"
          isActive={activeJackpots}
          onClick={onToggleJackpots}
        />
      </Stack>
    </Box>
  );
};

export default CategoryBar;
