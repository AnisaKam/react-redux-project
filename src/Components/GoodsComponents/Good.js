import ChangeNumber from "../Box/ChangeNumber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToBox } from "../../redux/boxSlice";



const Good = ({good}) => {

    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    

    return (<div>
        <img src={`${good.img}.jpg`}  alt ="good"/>
        <h2>{good.name}</h2>
        <p>$ {good.price}</p>
        {/*TO FIX LATER*/}
        <ChangeNumber number={number} setNumber={setNumber}/>
        <button onClick={() => {dispatch(addItemToBox({good, number}))}}>Add to cart</button>
    </div>)
}

export default Good;

  