import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Nav = () => {
    const data = useSelector(state=>state.addCart);
    console.log('data', data);
    return (
        <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1"><h3>SHOPPING SITE</h3></span>
      
            <ul className='nav-link'>
            <Link to='/Items'><Button  class="btn btn-primary">Items</Button></Link>&nbsp;
            <Link to='/createItems'><Button class="btn btn-primary">Add Item</Button></Link>&nbsp;
            <Link to='/cart'><Button class="btn btn-primary">Cart</Button></Link>&nbsp;
            <label><p style={{color:'black'}}>Product in cart <b>{data.length}</b></p></label>&nbsp;
            </ul>
        </nav>  
    )
}

export default Nav;  