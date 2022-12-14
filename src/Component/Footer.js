import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2' onClick={()=>{props.reset()}}>Reset</button>
        <div className='col-6 bg-dark text-white text-center'>{props.totalAmount}</div>
        <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
