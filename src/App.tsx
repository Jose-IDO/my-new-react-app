import { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Landingpagemodcont } from '../components/landingpagemodulecont/Landingpagemodcont';
import { useLocalStorage } from './hooks/useLocalStorage';
import { searchLinks } from './utils/searchUtils';
import './app.module.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const { links } = useLocalStorage();

  const filteredLinks = useMemo(() => 
    searchLinks(links, searchInput), 
    [links, searchInput]
  );

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleClearSearch = () => {
    setSearchInput('');
  };

  return (
    <>
      <Navbar
        searchInput={searchInput}
        onSearchInputChange={handleSearchInputChange}
        onClearSearch={handleClearSearch}
      />
      <Landingpagemodcont
        filteredLinks={filteredLinks}
        searchTerm={searchInput}
        allLinks={links}
      />
    </>
  );
}

export default App