import { Icon, Paper, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface CategoryItemProps {
  icon: React.ComponentType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryItem = ({
  icon: IconComponent,
  label,
  isActive,
  onClick,
}: CategoryItemProps) => {
  const boxStyle = (theme: Theme) => ({
    bgcolor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
    py: { xs: 1, sm: 2 },
    px: 2,
    minWidth: { xs: 96, sm: 110 },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.10)",
      bgcolor: isActive
        ? theme.palette.primary.dark
        : theme.palette.action.hover,
    },
    transition: "transform 200ms ease, background-color 300ms ease",
  });

  return (
    <Paper
      onClick={onClick}
      sx={(theme) => ({
        ...boxStyle(theme),
        bgcolor: isActive
          ? theme.palette.primary.main
          : theme.palette.background.paper,
      })}
    >
      <Icon sx={{ fontSize: 32 }} component={IconComponent} />
      <Typography variant="caption">{label}</Typography>
    </Paper>
  );
};

export default CategoryItem;
