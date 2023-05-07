import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '5rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

const BenefitsPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FitnessCenterIcon className={classes.icon} />
            <Typography variant="h5" align="center">
              Building strong muscles and bones
            </Typography>
            <Typography variant="body1" align="justify">
              Exercise can help build and maintain strong bones and muscles, reducing the risk of osteoporosis and promoting healthy aging.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <LocalHospitalIcon className={classes.icon} />
            <Typography variant="h5" align="center">
              Reducing the risk of chronic diseases
            </Typography>
            <Typography variant="body1" align="justify">
              Regular exercise can help reduce the risk of chronic diseases such as heart disease, stroke, and diabetes by improving
              cardiovascular health, blood sugar control, and overall immune function.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <SpeedIcon className={classes.icon} />
            <Typography variant="h5" align="center">
              Improving physical and mental performance
            </Typography>
            <Typography variant="body1" align="justify">
              Exercise can improve physical and mental performance by increasing endurance, strength, flexibility, and balance, as well as
              reducing stress, anxiety, and depression.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <EmojiObjectsIcon className={classes.icon} />
            <Typography variant="h5" align="center">
              Boosting cognitive function and creativity
            </Typography>
            <Typography variant="body1" align="justify">
              Exercise can boost cognitive function and creativity by increasing blood flow and oxygen to the brain, promoting the growth of
              new brain cells, and improving memory and focus.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BenefitsPage;
