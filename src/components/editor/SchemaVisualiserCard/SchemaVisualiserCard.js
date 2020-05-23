import React from 'react';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import SchemaItemDialog from '../SwitchItemDialog/SchemaItemDialog';
import AddIcon from '@material-ui/icons/Add';
import RequiredSwitch from '../RequiredSwitch/RequiredSwitch';
import useStyles from './SchemaVisualiserCard.styles';

export default function EditorCard(props) {
  const classes = useStyles();
  const { name, required, handleArchive, isRoot } = props;

  const [open, setOpen] = React.useState(false);
  const [node, setNode] = React.useState(props.node);

  const { type, description } = node;
  const id = node.$id;
  const handleClickOpen = (event) => {
    event.stopPropagation();

    setOpen(true);
  };

  const handleNodeChange = (node) => {
    console.error(node);
    setNode(node);
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
        <RequiredSwitch checked={required} />
        <Typography className={classes.id} color="textSecondary" gutterBottom>
          {id}
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          {description}
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          Type: <b>{type}</b>
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <CardActions disableSpacing>
          {!isRoot && (
            <div>
              <IconButton aria-label="edit" onClick={(event) => handleClickOpen(event)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleArchive(id)}>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton aria-label="add" onClick={(event) => handleClickOpen(event)}>
                <AddIcon />
              </IconButton>
            </div>
          )}
        </CardActions>
      </div>

      <SchemaItemDialog
        open={open}
        handleClose={handleClose}
        handleNodeChange={handleNodeChange}
        node={node}
      />
    </Card>
  );
}
