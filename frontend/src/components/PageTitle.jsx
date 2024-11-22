import React from 'react'
import '../css/page-title.css'

const PageTitle = ({text1, text2, sub}) => {
  return (
    <div className='pt-container'>
      <p className='page-title'><span>{text1}</span> <span>{text2}</span> <span className='grey-line'></span></p>

      <p className='page-sub'>{sub}</p>
    </div>
  )
}

export default PageTitle