
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Search from "./Search";

const BarFilter = ({
  filtredProducts,
  setGrid,
  search,
  setSearch,
  sort,
  setSort,
}) => {
  return (
    <Box sx={{ p: "2px 4px", display: "flex", alignItems: "center", border: "1px solid #ffffff", borderRadius: "18px" }}>
      <IconButton
        sx={{ display: { xs: "none", md: "flex", color: "#ffffff" } }}
        onClick={() => setGrid(true)}
      >
        <AppsRoundedIcon />
      </IconButton>
      <IconButton
        sx={{ display: { xs: "none", md: "flex", color: "#ffffff" } }}
        onClick={() => setGrid(false)}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Typography
        sx={{ display: { xs: "none", md: "flex", color: "#ffffff" } }}
      >
        <strong>{filtredProducts.length}</strong> products{" "}
      </Typography>
      <Divider
        sx={{ height: 28, m: 0.5, color: "#ffffff" }}
        orientation="vertical"
      />
      <Search value={search} onChange={(e:any) => setSearch(e.target.value)} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-select-small-label"
          sx={{ color: "#ffffff" }} // White color for the InputLabel
        >
          Sort By
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label="Sort By"
          onChange={(e) => setSort(e.target.value)}
          sx={{
            color: "#ffffff", // White color for the text inside the Select component
            "& fieldset": {
              borderColor: "#ffffff", // White color for the border
            },
          }}
          size="small"
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="lowest-price">Lowest Price</MenuItem>
          <MenuItem value="highest-price">Highest Price</MenuItem>
          <MenuItem value="a-z">A-Z</MenuItem>
          <MenuItem value="z-a">Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BarFilter;
