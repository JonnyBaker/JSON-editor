import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
      float: 'right',
    },
  },
}));

export default useStyles;
