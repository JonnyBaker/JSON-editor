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
const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: 14,
  },
  controls: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  requiredIcon: {
    marginLeft: 'auto',
  },
}));

export default function EditorCard(props) {
  const classes = useStyles();
  const { element, name, required, handleArchive } = props;

  const [bob, setBob] = React.useState(false);

  const handleClickOpen = () => {
    setBob(true);
  };

  const handleClose = () => {
    setBob(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {element.description}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={() => handleClickOpen()}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleArchive(element.$id)}>
            <DeleteForeverIcon className={classes.playIcon} />
          </IconButton>
          <Switch className={classes.requiredIcon} checked={required} color="primary" />
        </CardActions>
      </div>
      <SchemaItemDialog bob={bob} handleClose={handleClose} />
    </Card>
  );
}
