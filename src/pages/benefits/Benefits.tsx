import React from 'react';
import { Container, Grid, Typography, Box, makeStyles } from '@material-ui/core';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LabelImportant from '@mui/icons-material/LabelImportant';
import GymSearchForm from '../../components/searchopenai/GymSearchForm';

import gymBackground from '../../img/benefits_background_gym.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  benefit: {
    marginBottom: theme.spacing(6),
  },
  background: {
    backgroundImage: `url(${gymBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}));

const BenefitsPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.background}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center" className={classes.title}>
              The Benefits of Exercise
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className={classes.subtitle}>
              Why working out is good for your body and mind
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.benefit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <FitnessCenterIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className={classes.subtitle}>
                    Building strong muscles and bones
                  </Typography>
                  <Typography variant="body1">
                    Exercise can help build and maintain strong bones and muscles, reducing the risk of osteoporosis and promoting healthy
                    aging.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.benefit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <LocalHospitalIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className={classes.subtitle}>
                    Reducing the risk of chronic diseases
                  </Typography>
                  <Typography variant="body1">
                    Regular exercise can help reduce the risk of chronic diseases such as heart disease, stroke, and diabetes by improving
                    cardiovascular health, blood sugar control, and overall immune function.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.benefit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SpeedIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className={classes.subtitle}>
                    Improving physical and mental performance
                  </Typography>
                  <Typography variant="body1">
                    Exercise can improve physical and mental performance by increasing endurance, strength, flexibility, and balance, as
                    well as reducing stress, anxiety, and depression.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.benefit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <EmojiObjectsIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className={classes.subtitle}>
                    Boosting cognitive function and creativity
                  </Typography>
                  <Typography variant="body1">
                    Exercise can boost cognitive function and creativity by increasing blood flow and oxygen to the brain, promoting the
                    growth of new brain cells, and improving memory and focus.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.benefit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <LabelImportant className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className={classes.subtitle}>
                    Do you wanna know more?
                  </Typography>
                  <Typography variant="body1">You can use the OpenAi system to check more details about this subject</Typography>
                </Grid>
              </Grid>
            </Box>

            <section>
              <GymSearchForm />
            </section>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsPage;
