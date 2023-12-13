import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Cart = () => {
  return (
    <div className='cart'>
        <main>
                
        <CartItem imgSrc={img1} name={"Pro Book"} price={82400} qty={1} id={"swdwd"}/>
        <CartItem imgSrc={img1} name={"Mac Book"} price={84000} qty={2} id={"swdwd"}/>
        <CartItem imgSrc={img1} name={"Vivo Book"} price={57400} qty={1} id={"swdwd"}/>

        </main>
        <aside>
            <h2>Subtotal: ${2000}</h2>
            <h2>Shipping: ${200}</h2>
            <h2>Tax: ${20}</h2>
            <h2>Total: ${2220}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,qty,dec,inc,delHandler,id})=>(
    <div className='cartItem'>
        <img src={imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>dec(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>inc(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>delHandler(id)}/>
    </div>
);

export default Cart