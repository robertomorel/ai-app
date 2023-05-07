import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import gymBackground from '../../img/gym_background_gym.jpg';

interface GymCardProps {
  imageUrl?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  image: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: grey[200],
      backgroundSize: '100%',
      height: '100%',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    content: {
      textAlign: 'center',
    },
    title: {
      fontWeight: 600,
      marginBottom: theme.spacing(1),
    },
    subtitle: {
      color: grey[600],
    },
  }),
);

const GymCard: React.FC<GymCardProps> = ({ image, title, subtitle, onClick }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.9)), url(${image})` }}
      onClick={onClick}
    >
      <CardMedia className={classes.media} />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GymCard;
