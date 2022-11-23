import { useSelector } from "react-redux";

import { getBoxItems, getTotalPrice } from "../../redux/boxSlice";
import BoxItem from "./BoxItem";


const Box = () => {
    const boxItems = useSelector(getBoxItems);
    const totalPrice = useSelector(getTotalPrice);
    

    return (<div>
        
        <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="icon"/> 
        <h3>TOTAL: $ {totalPrice}</h3>
        {boxItems.map(boxItem => <BoxItem boxItem={boxItem}/>)}
            
    </div>)
}

export default Box;
