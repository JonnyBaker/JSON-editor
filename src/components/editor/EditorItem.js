import React from 'react';

import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import EditorCard from './EditorCard';

const useStyles = makeStyles((theme) => ({}));

export default function EditorItem(props) {
  const classes = useStyles();

  return <TreeItem nodeId={props.id} label={<EditorCard />}></TreeItem>;
}
