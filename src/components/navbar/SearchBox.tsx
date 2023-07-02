import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
       
        
        <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">
          <InputLabel sx={{color:"secondary.main"}} htmlFor="outlined-adornment-password">Type and press Enter</InputLabel>
          <OutlinedInput sx={{ backgroundColor:`${'#ccd3d6'}20`,color:"secondary.main", border:'none'}}
            id="outlined-adornment-Search"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  aria-label="toggle Search visibility"
                  edge="end"
                >
                  <SearchIcon sx={{color:"secondary.main"}}/>
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        
    
     
    </Box>
  );
}