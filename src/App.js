import { useEffect, useMemo, useState } from 'react';
import ColorFilter from './components/ColorFilter/ColorFilter';
import ListItems from './components/ListItem/ListItems';
import SearchInput from './components/SearchInput/SearchInput';
import SortFilters from './components/SortFilters/SortFilters';
import './App.css';
import useFetch from './components/Hook/Hook';

function App() {

  const [items, setItems] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [itemsData, itemsLoading, itemsError] = useFetch(
    'http://localhost:3001/items'
  );
  const [colorsData, colorsLoading, colorsError] = useFetch(
    'http://localhost:3001/colors'
  );
  
  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

  useEffect(() => {
    setColors(colorsData);
  }, [colorsData]);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
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

  const priceFilteredItems = useMemo(() => {
    return filteredItems.filter((item) => {
      if (minPrice === "" && maxPrice === "") {
        return true;
      } else if (minPrice === "") {
        return item.price <= parseInt(maxPrice);
      } else if (maxPrice === "") {
        return item.price >= parseInt(minPrice);
      } else {
        return (
          item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice)
        );
      }
    });
  }, [filteredItems, minPrice, maxPrice]);
  

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
 
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
      {itemsLoading || colorsLoading ? (
        <div>Loading...</div>
      ) : itemsError || colorsError ? (
        <div>Error fetching data</div>
      ) : (
        <>
          <SearchInput value={searchValue} onChange={handleSearchValue} />
          <SortFilters
            sortByPriceHighToLow={sortByPriceHighToLow}
            sortByPriceLowToHigh={sortByPriceLowToHigh}
            sortByRating={sortByRating}
          />
          <div className="container">
            <div className="wrapper">
              <ColorFilter
                items={priceFilteredItems}
                colors={colors}
                selectedColors={selectedColors}
                onColorChange={handleColorChange}
                minValue={minPrice}
                onChangeMin={handleMinPriceChange}
                maxValue={maxPrice}
                onChangeMax={handleMaxPriceChange}
              />
              <ListItems data={priceFilteredItems} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
