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
  const [searchValue, setSearchValue] = useState('');

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

  const searchFilteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredItems =
    selectedColors.length === 0
      ? searchFilteredItems
      : searchFilteredItems.filter((item) =>
          selectedColors.includes(item.color)
        );

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

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <SearchInput value={searchValue} onChange={handleSearchValue} />
      <SortFilters
        sortByPriceHighToLow={sortByPriceHighToLow}
        sortByPriceLowToHigh={sortByPriceLowToHigh}
        sortByRating={sortByRating}
      />
      <input 
          placeholder='min' 
          id="minPrice" 
          name="minPrice" /> 
            <span> - </span> 
        <input 
          id="maxPrice" 
          placeholder='max' 
          name="maxPrice"/>
      <div className="container">
        <div className="wrapper">
          <ColorFilter
            items={filteredItems}
            colors={colors}
            selectedColors={selectedColors}
            onColorChange={handleColorChange}
          />
          <ListItems data={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
