import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
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

export default function FormDialog(props) {
  const { open, handleClose } = props;
  const classes = useStyles();

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={handleDialogClick}
      aria-labelledby="form-dialog-title"
    >
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField id="enums" label="Enum" />
        </div>
        <div>
          <TextField id="examples" label="Examples" />
        </div>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </form>
    </Dialog>
  );
}
