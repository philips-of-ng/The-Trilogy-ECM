import React from 'react'
import '../css/spinner.css'

const Spinner = ({ color }) => {
  return (
    <>
      <i style={{ color: `${color}` }} class='bxr  bx-loader-lines spinner' ></i>  
    </>
  )
}

export default Spinner