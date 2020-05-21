import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'align-items': 'stretch',
    direction: 'row',
    justify: 'center',
    maxWidth: '100%',
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default useStyles;
