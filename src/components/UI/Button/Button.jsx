import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons({add}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />} onClick={()=>add()}>
        Send
      </Button>
    </Stack>
  );
}