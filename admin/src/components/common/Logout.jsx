// import React from 'react'
// import React, { Component } from 'react'

// import {Link} from 'react-router-dom'

function Logout () {
    window.localStorage.clear();
    window.location.href = "/";   
}

export default Logout