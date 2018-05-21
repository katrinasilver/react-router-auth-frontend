import React from 'react'
import { Link } from 'react-router-dom'

const Protected = () => (
  <div>
    <Link to='/'>Public</Link>
    <div>
      Protected
    </div>
  </div>
)

export default Protected
