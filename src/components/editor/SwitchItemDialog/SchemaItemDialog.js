import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './SchemaVisualiserItem.styles';
export default function FormDialog(props) {
  const { open, handleClose, node } = props;
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
        <TextField
          id="outlined-multiline-flexible"
          label="enums"
          multiline
          rowsMax={4}
          value={node.enums}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="examples"
          multiline
          rowsMax={4}
          value={node.examples}
          variant="outlined"
        />
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
