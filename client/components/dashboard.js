import React from 'react'
import { Link } from 'react-router-dom'  

// import Head from './head'

const Dash = () => {
  return (
    <div id="title"> 
      Dashboard
      <div>
        <Link to="/dashboard/profile/d3f71027-b686-4134-8567-8ce38f5e923f">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
