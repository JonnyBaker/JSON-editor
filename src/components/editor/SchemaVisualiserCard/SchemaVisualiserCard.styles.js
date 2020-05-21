import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    display: 'inline-block',
  },
  id: {
    fontSize: 12,
    fontWeight: 'italic',
  },
  button: {
    float: 'right',
  },
  description: {
    fontSize: 12,
  },
  controls: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  requiredIcon: {
    float: 'right',
    '& .MuiTypography-body1': {
      fontSize: 12,
    },
  },
}));

export default useStyles;
