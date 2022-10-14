import React from 'react'

export default function Product(props) {
  
  return (
    <div className='row'>
            <div className='col-4'>
                <h2>{props.product.name}<span class="badge bg-secondary">{props.product.price}</span></h2>
            </div>

            <div className='col-3'>
              <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>-</button>
                    <button type="button" class="btn btn-warning">{props.product.qulity}</button>
                    <button type="button" class="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>+</button>
              </div>
            </div>

            <div className='col-2'>
              {props.product.qulity*props.product.price}
            </div>

    </div>
  )
}
