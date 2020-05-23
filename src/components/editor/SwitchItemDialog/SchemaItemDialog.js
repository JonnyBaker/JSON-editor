import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './SchemaVisualiserItem.styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function FormDialog(props) {
  const { open, handleClose, node } = props;
  const [type, setType] = React.useState(node.type);

  const classes = useStyles();

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleTypeChangeEvent = (event) => {
    setType(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={handleDialogClick}
      aria-labelledby="form-dialog-title"
    >
      <form className={classes.form} noValidate autoComplete="off">
        <FormControl variant="outlined" className={classes.select}>
          <InputLabel id="typeLabel">type</InputLabel>
          <Select
            id="type"
            value={type}
            label="Type"
            onClick={(event) => handleTypeChangeEvent(event)}
          >
            <MenuItem value={'integer'}>integer</MenuItem>
            <MenuItem value={'string'}>string</MenuItem>
            <MenuItem value={'object'}>object</MenuItem>
            <MenuItem value={'number'}>number</MenuItem>
            <MenuItem value={'boolean'}>boolean</MenuItem>
            <MenuItem value={'array'}>array</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label="enums"
          className={classes.field}
          value={node.enums || ''}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.field}
          label="examples"
          value={node.examples || ''}
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
          className={classes.button}
        >
          Cancel
        </Button>
      </form>
    </Dialog>
  );
}
