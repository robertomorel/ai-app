import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GroupIcon from '@mui/icons-material/Group';
import Fade from '@mui/material/Fade';

import gymBackground from '../../img/gym_background_dashboard.webp';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${gymBackground})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#1976d2',
    padding: '2rem',
  },
  heading: {
    color: 'white',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  subheading: {
    color: 'white',
    fontWeight: 500,
    marginBottom: '2rem',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    padding: '2rem',
  },
  sectionTitle: {
    fontWeight: 700,
    marginBottom: '1rem',
    color: 'white',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  featureIcon: {
    marginRight: '1rem',
    color: '#1976d2',
    fontSize: '2rem',
  },
  featureText: {
    fontWeight: 500,
  },
});

const link =
  'https://api.whatsapp.com/send?phone=5585988890472&text=I%20wanna%20know%20more...';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Container maxWidth="md">
          <Typography variant="h3" className={classes.heading} gutterBottom>
            Welcome to Gym Fitness!
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subheading}
            gutterBottom
          >
            Start your fitness journey today.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/"
            sx={{ fontWeight: 700 }}
          >
            Back
          </Button>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ pt: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classes.sectionTitle}
              gutterBottom
            >
              Why work out?
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: '#fff' }}>
              Working out is essential for maintaining good health and improving
              physical fitness. Regular exercise can help prevent chronic
              diseases like heart disease, obesity, and diabetes. It can also
              improve your mood, reduce stress, and boost your overall
              well-being.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classes.sectionTitle}
              gutterBottom
            >
              Our Gym Features
            </Typography>
            <Box className={classes.section}>
              <Fade in={true} timeout={1000}>
                <Box className={classes.featureItem}>
                  <FitnessCenterIcon className={classes.featureIcon} />
                  <Typography variant="body1" className={classes.featureText}>
                    State-of-the-art equipment
                  </Typography>
                </Box>
              </Fade>
              <Fade in={true} timeout={1500}>
                <Box className={classes.featureItem}>
                  <DirectionsRunIcon className={classes.featureIcon} />
                  <Typography variant="body1" className={classes.featureText}>
                    Experienced personal trainers
                  </Typography>
                </Box>
              </Fade>
              <Fade in={true} timeout={1500}>
                <Box className={classes.featureItem}>
                  <GroupIcon className={classes.featureIcon} />
                  <Typography variant="body1" className={classes.featureText}>
                    <a href={link}>Let's try our Whatsapp group</a>
                  </Typography>
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
