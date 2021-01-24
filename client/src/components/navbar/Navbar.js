import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Drawer from "../drawer/Drawer"

import Menu from "@material-ui/icons/Menu"

import "./Navbar.css"
import Backdrop from "../backdrop/Backdrop"

const Navbar = ({setShowModal,setCurrentId}) => {
    const [showDrawer,setShowDrawer] = useState(false)
    const [windowWidth,setWindowWidth]= useState(window.innerWidth)
    const newPost =()=>{
            setCurrentId(null)
            setShowModal(true)
        }

    const checkSize = () =>{
        window.innerWidth>768&&setShowDrawer(false)
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize',checkSize);
    })

    const createNewPost = ()=>{
        setShowDrawer(false)
        newPost()
    }

    return (
        <div className="navbar-container">
            <Link to="/" className="nav-title"><h1>Bibliotopia</h1></Link>
            {showDrawer&&<Backdrop onClick={()=>setShowDrawer(false)}/>}
            <Drawer show={showDrawer}>
            <ul className="navbar-links">
                <Link style={{ textDecoration: 'none'}} onClick={createNewPost}><li >Add a new book</li></Link>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={()=>setShowDrawer(false)}><li>Browse Books</li></Link>
            </ul>
            </Drawer>
            {windowWidth>700&&<ul className="navbar-links">
                <Link style={{ textDecoration: 'none'}} onClick={newPost}><li >Add a new book</li></Link>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={()=>setShowDrawer(false)}><li>Browse Books</li></Link>
            </ul>}
            <button className="menu-nav" onClick={()=>setShowDrawer(!showDrawer)}>
                <Menu className="menu-nav" />
            </button>
                
            

        </div>
    )
}

export default Navbar
