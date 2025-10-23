"use client";
import { useGames } from "@/hooks/useMockGames";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CategoryBar from "./CategoryBar";
import GamesGrid from "./GamesGrid";
import useDebouncedValue from "@/hooks/useDebounce";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useIsMobile } from "@/hooks/useMediaQueries";

const SlotSection = () => {
  const isMobile = useIsMobile();
  const { games, loading, error } = useGames();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebouncedValue(searchQuery, 300);

  const [showFavourites, setShowFavourites] = useState(false);
  const [showBoosted, setShowBoosted] = useState(false);
  const [showParlay, setShowParlay] = useState(false);

  const filteredData = games.filter((row) => {
    const query = debouncedQuery.toLowerCase();

    const matchesSearch =
      row.title.toLowerCase().includes(query) ||
      row.category.toLowerCase().includes(query) ||
      row.provider.toLowerCase().includes(query);

    const matchesFav = !showFavourites ? true : row.category === "Table Games";
    const matchesBoosted = !showBoosted ? true : row.category === "Slots";
    const matchesParlay = !showParlay ? true : row.category === "Jackpots";

    return matchesSearch && matchesFav && matchesBoosted && matchesParlay;
  });

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Stack
          spacing={2}
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={365}>
            <TextField
              fullWidth
              size="medium"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 28 }} />
                    </InputAdornment>
                  ),
                },
              }}
              placeholder="Search your game"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </Box>

          <CategoryBar
            activeFavourite={showFavourites}
            onToggleFavourite={() => setShowFavourites((v) => !v)}
            activeBoosted={showBoosted}
            onToggleBoosted={() => setShowBoosted((v) => !v)}
            activeParlay={showParlay}
            onToggleParlay={() => setShowParlay((v) => !v)}
          />
        </Stack>
        <Box>
          <Stack direction="row" spacing={1}>
            <TrendingUpIcon sx={{ fontSize: 36, color: "primary.main" }} />
            <Typography variant="h5" color="text.primary">
              Trending Games
            </Typography>
          </Stack>
          <Typography variant="subtitle1" color="text.secondary">
            Showing {filteredData.length} Results
          </Typography>
        </Box>
        <GamesGrid
          games={filteredData}
          loading={loading}
          error={error}
          searchQuery={searchQuery}
        />
      </Stack>
    </Container>
  );
};

export default SlotSection;
