import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ data }) {
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="140"
               image={data.avatar}
               alt="green iguana"
               margin="5"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {data.first_name}  {data.last_name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {data.email}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}
