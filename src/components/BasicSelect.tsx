import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// BasicSelect Komponente
export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string); // Typumwandlung in string nötig wegen number | string    
  };

const valueAge = Array.from({ length: 70 }, (_, i) => i + 1); // Array von 1 bis 70 erzeugen

return (
    <Box sx={{ minWidth: 120 }}> 
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                    <MenuItem value="">
                            <em>None</em>
                    </MenuItem>
                    {valueAge.map((val) => (
                            <MenuItem key={val} value={val}>{val}</MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Box>
);
}
