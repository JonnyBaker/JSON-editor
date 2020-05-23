import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './SchemaVisualiserItem.styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { updateNodeById } from './updateNodeById';

export default function FormDialog(props) {
  const { open, handleClose, node, updateTree } = props;
  const [type, setType] = React.useState(node.type);
  const [enums, setEnums] = React.useState(node.enums);
  const [examples, setExamples] = React.useState(node.examples);

  const classes = useStyles();

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleTypeChangeEvent = (event) => {
    setType(event.target.value);
  };

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const onClose = () => {
    setType(node.type);
    setType(node.enums);
    setType(node.examples);

    handleClose();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    node.type = type;
    node.enums = enums;
    node.examples = examples;

    updateTree((tree) => {
      updateNodeById(tree, node);
      return { ...tree };
    });

    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={handleDialogClick}
      aria-labelledby="form-dialog-title"
    >
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={(event) => onSubmit(event)}
      >
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
          value={enums || ''}
          variant="outlined"
          onChange={(event) => handleChange(event, setEnums)}
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.field}
          label="examples"
          value={examples || ''}
          variant="outlined"
          onChange={(event) => handleChange(event, setExamples)}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose} className={classes.button}>
          Cancel
        </Button>
      </form>
    </Dialog>
  );
}
