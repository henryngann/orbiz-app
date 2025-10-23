import { Icon, Paper, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface CategoryItemProps {
  icon: React.ComponentType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

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

const CategoryItem = ({
  icon: IconComponent,
  label,
  isActive,
  onClick,
}: CategoryItemProps) => {
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
      <Icon component={IconComponent} />
      <Typography variant="caption">{label}</Typography>
    </Paper>
  );
};

export default CategoryItem;
