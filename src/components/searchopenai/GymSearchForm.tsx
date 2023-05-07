import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@mui/icons-material';
import { useOpenAISearch } from '../../hooks/useOpenAISearch';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: 'url(/gym-background.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    padding: '50px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  textField: {
    width: '100%',
  },
  searchButton: {
    marginTop: '20px',
    padding: 10,
  },
});

const GymSearchForm = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const { results, isLoading } = useOpenAISearch(searchText);

  const handleSearch = () => {
    setSearchText(searchText);
  };

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center" className={classes.formContainer}>
        <Grid item xs={12}>
          <TextField
            label="Search"
            variant="outlined"
            className={classes.textField}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            InputProps={{
              endAdornment: <Search />,
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '10px' }}>
          <Button variant="contained" color="primary" onClick={handleSearch} className={classes.searchButton} startIcon={<Search />}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default GymSearchForm;
