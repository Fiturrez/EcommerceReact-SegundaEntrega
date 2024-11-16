import React from "react";
import cartIcon from "../assets/carrito-de-compras.png"

function CartWidget (){
    return(
        <div>
            <img src={cartIcon} style={{ width: '30px', height: '30px' }} />
        </div>
    );
}

export default CartWidget;