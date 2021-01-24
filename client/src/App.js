import React,{useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {getPosts} from "./actions/posts"
import HomePage from "./components/HomePage"
import SinglePost from "./components/singlePost/SinglePost"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [currentId,setCurrentId] = useState(null)
  const [showModal,setShowModal] = useState(false)


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])

  return (
    <Router>
      <Navbar setShowModal={setShowModal} setCurrentId={setCurrentId}/>
      <Switch>
        <Route path="/" exact>
          <HomePage currentId={currentId} setCurrentId={setCurrentId} setShowModal={setShowModal} showModal={showModal}/>
        </Route>
        <Route path="/post/:id">
          <SinglePost currentId={currentId} setCurrentId={setCurrentId} setShowModal={setShowModal} showModal={showModal}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
