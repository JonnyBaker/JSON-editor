import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Editor from './components/editor/Editor';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'align-items': 'stretch',
    direction: 'row',
    justify: 'center',
  },
  paper: {
    height: 900,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function App() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box className={classes.heading} color="text.primary">
        <Typography variant="h3">json-editor</Typography>
      </Box>
      <Grid container spacing={spacing}>
        <Grid md={4} item>
          <Paper className={classes.paper} />
        </Grid>
        <Editor />
      </Grid>
    </Container>
  );
}
