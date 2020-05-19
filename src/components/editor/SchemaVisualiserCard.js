import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import SchemaItemDialog from './SchemaItemDialog';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {},
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
  },
}));

export default function EditorCard(props) {
  const classes = useStyles();
  const { element, name, required, handleArchive, isRoot } = props;
  const { type } = element;
  const id = element.$id;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Switch className={classes.requiredIcon} checked={required} color="primary" />
        <Typography className={classes.id} color="textSecondary" gutterBottom>
          {id}
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          {element.description}
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          Type: <b>{type}</b>
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <CardActions disableSpacing>
          {!isRoot && (
            <div>
              <IconButton aria-label="edit" onClick={() => handleClickOpen()}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleArchive(id)}>
                <DeleteForeverIcon className={classes.playIcon} />
              </IconButton>
            </div>
          )}
          <IconButton aria-label="add" onClick={() => handleClickOpen()}>
            <AddIcon />
          </IconButton>
        </CardActions>
      </div>

      <SchemaItemDialog open={open} handleClose={handleClose} />
    </Card>
  );
}
