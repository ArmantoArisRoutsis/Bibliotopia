import React,{useState, useEffect} from "react"
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from "react-redux"

import {getPosts} from "./actions/posts"
import Posts from "./components/posts/Posts"
import Form from "./components/form/Form"
import useStyles from "./styles"

function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();

  //I think we are using useEffect here to enable the getPosts action by dispatching it
  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Bibliotopia</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
