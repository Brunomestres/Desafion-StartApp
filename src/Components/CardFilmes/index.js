import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from '@material-ui/core';
import useStyles from './styled';
export default function CardFilmes(props){
  const classes = useStyles();
  return (
    <Card className={classes.film}>
      <CardMedia
      className={classes.cover}
      image={`https://image.tmdb.org/t/p/w300/${props.path}`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            { props.title }
          </Typography>
          <Typography component="div" color="textSecondary">
            <Box fontSize={15} className={classes.overview} >
              { props.overview }
            </Box>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
