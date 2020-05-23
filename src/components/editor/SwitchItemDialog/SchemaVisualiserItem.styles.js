import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    marginTop: theme.spacing(),
  },
  field: {
    margin: theme.spacing(1),
    width: '90%',
  },
  button: {
    margin: theme.spacing(1),
    float: 'right',
  },
  select: {
    margin: theme.spacing(1),
    width: '90%',
  },
}));

export default useStyles;
