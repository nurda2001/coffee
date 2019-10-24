import React from 'react';
import {Redirect} from 'react-router-dom';

const Wrapper = (props) => {
    return !props.isAuth ? <Redirect to="/signin" /> : props.children
} 

export default Wrapper;