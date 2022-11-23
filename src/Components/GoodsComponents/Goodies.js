import dataGoodies from "../../data/dataGoodies";
import Good from "./Good";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/goodiesSlice";

const Goodies = () => {
    const selectedCategory = useSelector(getSelectedCategory);
  

    return (<div>
        {dataGoodies
        .filter(good => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === good.category;
        })
        .map(good => <Good good={good}/>)}
    </div>)
}

export default Goodies;