import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ value, onChange }) => {
  return (
    <>
      <InputBase
        value={value}
        onChange={onChange}
        sx={{ ml: 1, flex: 1, px: 2, color: "white" }} // Set text color to white
        placeholder="Search by name"
        inputProps={{ "aria-label": "search by name" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "white" }} // Set icon color to white
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default Search;
