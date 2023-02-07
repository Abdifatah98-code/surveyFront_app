import React from 'react'
import Navbar from '../comonents/Navbar'
import OverViewEvents from '../comonents/OverViewEvents'

function SurveyPage() {
  return (
    <div className="container-fluad" style={{backgroundColor:"#F3F5FF"}}>
      <div className='wrapper mx-5 my-0'>
        <Navbar/>
        <OverViewEvents/>
    </div>
    </div>
  )
}

export default SurveyPage