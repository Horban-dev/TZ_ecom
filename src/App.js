import { useEffect, useState } from 'react';
import './App.css';
import ColorFilter from './components/colorOptions/ColorFilter';
import ListItems from './components/ListItem/ListItems';
import SearchInput from './components/searchInput/searchInput';
import SortFilters from './components/sortFilters/SortFilters';

function App() {
  const [items, setItems] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(data => setItems(data));
      fetch('http://localhost:3001/colors')
      .then(response => response.json())
      .then(data => setColors(data));
  }, []);

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const filteredItems = selectedColors.length
    ? items.filter((item) => selectedColors.includes(item.color))
    : items;


  const sortByPriceLowToHigh = () => {
    const sortedItems = [...items].sort((a, b) => a.price - b.price);
    setItems(sortedItems);
  };

  const sortByPriceHighToLow = () => {
    const sortedItems = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedItems);
  };

  const sortByRating = () => {
    const sortedItems = [...items].sort((a, b) => b.rating - a.rating);
    setItems(sortedItems);
  };
  
 
  return (
    <div className="App">
      <SearchInput/>
      <SortFilters sortByPriceHighToLow={sortByPriceHighToLow} sortByPriceLowToHigh={sortByPriceLowToHigh} sortByRating={sortByRating} />
      <div className='container'>
        <div className='wrapper'>
          <ColorFilter colors={colors} onColorChange={handleColorChange}/>
          <ListItems data={filteredItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
