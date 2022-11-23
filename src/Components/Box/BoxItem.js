
import dataGoodies from "../../data/dataGoodies";
import { useDispatch } from "react-redux";
import { removeItemFromBox } from "../../redux/boxSlice";


const BoxItem = ({boxItem}) => {
    //console.log(boxItem)
    const goodies = dataGoodies.find(item => item.id === boxItem.goodId) 
    //console.log(goodies)
    const dispatch = useDispatch();


    return (<div>
        <p>{goodies.name}</p> 
        <p>{boxItem.number} portion (s)</p>
        <p>Price: ${goodies.price * boxItem.number}</p>

        <span onClick={() => dispatch(removeItemFromBox({boxItemId: boxItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash"/>
        </span>

    </div>)
}

export default BoxItem;
