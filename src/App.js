import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SchemaVisualiser from './components/editor/SchemaVisualiser/SchemaVisualiser';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { schema } from './jsonSchema';
const util = require('util');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'align-items': 'stretch',
    direction: 'row',
    justify: 'center',
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function App() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const [tree, removeNodeFromTree] = React.useState(schema);

  return (
    <Container maxWidth="lg">
      <Box className={classes.heading} color="text.primary">
        <Typography variant="h3">json-editor</Typography>
      </Box>
      <Grid container spacing={spacing}>
        <Grid lg={4} item>
          <Editor
            value={tree}
            highlight={(tree) =>
              highlight(util.inspect(tree, { showHidden: false, depth: null }), languages.js)
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </Grid>
        <SchemaVisualiser tree={tree} removeNodeFromTree={removeNodeFromTree} />
      </Grid>
    </Container>
  );
}
