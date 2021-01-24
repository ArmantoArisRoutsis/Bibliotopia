import React from "react"
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from "./posts/Posts"
import useStyles from "./styles"


const HomePage = ({currentId,setCurrentId, setShowModal, showModal}) => {
    const classes = useStyles()
    return (
    <Container maxWidth="lg">
      <Grow in>
        <Container style={{marginTop:"100px"}}>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
              <Posts currentId={currentId} setCurrentId={setCurrentId} setShowModal={setShowModal} showModal={showModal}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )
}

export default HomePage
