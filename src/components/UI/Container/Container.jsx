import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
   return (
      <>
         <CssBaseline />
         <Container maxWidth="lg">
          
               {children}

         </Container>
      </>   
   );
}
