import './App.css';
import ColorFilter from './components/colorOptions/ColorFilter';
import ListItems from './components/ListItem/ListItems';
import SearchInput from './components/searchInput/searchInput';
import SortFilters from './components/sortFilters/SortFilters';

function App() {
  return (
    <div className="App">
      <SearchInput/>
      <SortFilters/>
      <div className='container'>
        <div className='wrapper'>
          <ColorFilter/>
          <ListItems/>
        </div>
      </div>
    </div>
  );
}

export default App;
