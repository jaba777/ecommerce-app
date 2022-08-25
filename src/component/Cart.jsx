import React from 'react'
import './Cart.css'

const Cart = ({express,addHandler,removeHandler,deleteHandler}) => {
    const totalprice= express.reduce((a,b)=> a + b.price*b.qty,0);
  return (
    <>
    <div className="container">
    <div className='container-box'>
      {
        express.map((item,index)=>{
            return(
                <div key={index} className='box'>
                    <div className="col-md-4">
                        <img src={item.image} alt={item.title} height='200px' width='180px' />
                    </div>

                    <div className="col-md-4">
                        <h3>{item.title}</h3>
                        <p className='lead fw-bold'>
                         {item.qty} X ${item.price} = $
                         {(item.qty * item.price).toFixed()}
                        </p>
                        <button className="btn btn-outline-dark me-4" onClick={()=>removeHandler(item)}>
                            <i className='fa fa-minus'></i>
                        </button>
                        <button className="btn btn-outline-dark me-4" onClick={()=>addHandler(item)}>
                            <i className='fa fa-plus'></i>
                        </button>
                       
                        <button className="btn btn-outline-dark me-4" onClick={()=>deleteHandler(item)}>
                        <i class="fas fa-trash"></i>
                        </button>
                    </div>

                </div>
            )
        })
      }
       </div>
       <hr />
       <h2>Totalprice: ${totalprice.toFixed()}</h2>
       </div>
    </>
  )
}

export default Cart
