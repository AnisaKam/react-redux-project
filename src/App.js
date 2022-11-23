
import './App.css';
import Box from './Components/Box/Box';
import Categories from './Components/Filter/Categories';
import Goodies from './Components/GoodsComponents/Goodies';



/*import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';*/

function App() {
  return (
    <div className="App">

      <div className='block'>
      <Categories/>
      <Box/>
      </div>

      <div className='block'>
      <Goodies/>
      </div>

    </div>
  );
}

export default App;
