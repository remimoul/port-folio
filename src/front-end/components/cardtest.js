import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
export default function ActionAreaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="ml-10 my-4" >
      <CardActionArea>
        <CardMedia
          component="img"
          className="min-w-custom-min max-w-custom-max min-h-custom-min max-h-custom-max"
          image={data.imageUrl}
          alt="img card"
        />
        <CardContent className="bg-gray-500">
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" height="50" />
    </a>
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
