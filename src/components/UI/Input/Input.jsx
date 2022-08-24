import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({value,setIsName}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>setIsName(e.target.value)} value={value} id="outlined-basic" label="Outlined" variant="outlined" />

    </Box>
  );
}