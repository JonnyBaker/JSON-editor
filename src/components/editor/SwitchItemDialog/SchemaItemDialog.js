import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './SchemaVisualiserItem.styles';
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
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </form>
    </Dialog>
  );
}
