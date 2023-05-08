import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GymCard from '../../components/gymcard/GymCard';
import { IMuscle, muscles } from './muscles';

import gymBackground from '../../img/gym_background_gym.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${gymBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      minHeight: '100vh',
    },
    title: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      color: '#ffffff',
      textShadow: '1px 1px #000000',
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontSize: '2rem',
      },
    },
    gridContainer: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
    muscleDetails: {
      backgroundColor: 'rgba(255,255,255,1)',
      padding: theme.spacing(4),
      borderRadius: theme.spacing(0.5),
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
      },
    },
    muscleTitle: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    muscleSubtitle: {
      marginBottom: theme.spacing(4),
    },
    muscleExercises: {
      display: 'flex',
      flexDirection: 'column',
    },
    exercise: {
      marginBottom: theme.spacing(4),
    },
    exerciseTitle: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    videoList: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    video: {
      width: '30%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
    },
    videoFrame: {
      width: '100%',
      height: 0,
      paddingBottom: '56.25%',
      position: 'relative',
      '& > iframe': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
    videoListItem: {
      marginBottom: theme.spacing(1),
    },

    videoLink: {
      display: 'block',
      color: theme.palette.text.secondary,
      textDecoration: '',
      '&:hover': {
        textDecoration: 'underline',
        color: 'blue',
      },
    },
  }),
);

const getYoutubeVideoId = (exercise: string) => {
  return `https://www.youtube.com/results?search_query=${exercise.replaceAll(' ', '+')}`;
};

const GymPage = () => {
  const classes = useStyles();

  const [selectedMuscle, setSelectedMuscle] = React.useState<IMuscle | undefined>(undefined);

  const handleMuscleClick = (muscleId: number) => {
    setSelectedMuscle(muscles.find(({ id }) => id === muscleId));
  };

  const renderMuscleDetails = () => {
    if (!selectedMuscle) return;

    const youtubeLinks = selectedMuscle.exercises.map((exercise) => {
      const videoUrl = getYoutubeVideoId(exercise);
      return (
        <li key={exercise} className={classes.videoList}>
          <a href={videoUrl} target="_blank" rel="noreferrer" className={classes.videoLink}>
            {exercise}
          </a>
        </li>
      );
    });

    // const youtubeLinks = selectedMuscle.exercises.map((exercise) => {
    //   const videoId = getYoutubeVideoId(exercise);
    //   if (!videoId) return null;
    //   const videoUrl = `${youtubeBaseUrl}${videoId}`;
    //   return (
    //     <li key={exercise} className={classes.videoListItem}>
    //       <a href={videoUrl} target="_blank" rel="noreferrer" className={classes.videoLink}>
    //         {exercise}
    //       </a>
    //     </li>
    //   );
    // });

    return (
      <div className={classes.muscleDetails}>
        <Typography variant="h3" className={classes.muscleTitle}>
          {selectedMuscle.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.muscleSubtitle}>
          {selectedMuscle.subtitle}
        </Typography>
        {/* <Typography variant="body1" className={classes.muscleDescription}>
          {selectedMuscle.description}
        </Typography> */}
        <ul className={classes.muscleExercises}>
          {selectedMuscle.exercises.map((exercise, index) => (
            <li key={index} className={classes.exercise}>
              <Typography variant="h5" className={classes.exerciseTitle}>
                {exercise}
              </Typography>
              <ul className={classes.videoList}>{youtubeLinks[index]}</ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Gym Workouts
        </Typography>
        <Grid container spacing={4} className={classes.gridContainer}>
          {muscles.map((muscle) => (
            <Grid item xs={12} sm={6} md={4} key={muscle.id}>
              <GymCard title={muscle.title} subtitle={muscle.subtitle} image={muscle.img} onClick={() => handleMuscleClick(muscle.id)} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <section style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>{renderMuscleDetails()}</section>
    </div>
  );
};

export default GymPage;
