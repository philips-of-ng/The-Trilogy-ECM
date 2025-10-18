import React from 'react'

const BlankPageSpinner = ({ message }) => {
  return (
    <div 
    style={{ height: '100vh', width: '100vw', position: 'fixed' }}
    className='bps flex justify-center align-middle'>
      <span class="material-symbols-outlined">
        progress_activity
      </span>

      <p>{message}</p>
    </div>
  )
}

export default BlankPageSpinner