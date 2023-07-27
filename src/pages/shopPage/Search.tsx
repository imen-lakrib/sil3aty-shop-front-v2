import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react"; // Import ChangeEvent type

interface SearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => { // Add types to props
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
