import { ButtonCont } from '../ButtonContainer/ButtonCont'
import { SearchBar } from '../SearchBar/SearchBar'
import { Buttons } from '../buttons/Buttons'
import styles from './navbar.module.css'

type NavbarProps = {
  LoginButtonClicked: () => void;
  searchInput: string;
  onSearchInputChange: (value: string) => void;
  onSearchSubmit: (links: any[]) => void;
  onClearSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  LoginButtonClicked,
  searchInput,
  onSearchInputChange,
  onSearchSubmit,
  onClearSearch
}) => {
  
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const savedLinks = JSON.parse(localStorage.getItem('savedLinks') || '[]');
      onSearchSubmit(savedLinks);
    }
  };

  const handleSearchClick = () => {
    const savedLinks = JSON.parse(localStorage.getItem('savedLinks') || '[]');
    onSearchSubmit(savedLinks);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.searchcontainer}>
          <div className={styles.searchgroup}>
            <SearchBar 
              searchValue={searchInput}
              onSearchChange={onSearchInputChange}
              placeholder="Search your links by title, URL, description, or tags..."
              onKeyPress={handleKeyPress}
            />
            <div className={styles.searchbuttons}>
              <Buttons bgColor="contbuttonone" onClick={handleSearchClick}>
                Search
              </Buttons>
              {searchInput && (
                <Buttons bgColor="bgRed" onClick={onClearSearch}>
                  Clear
                </Buttons>
              )}
            </div>
          </div>
        </div>
        
        <ButtonCont LoginButtonClicked={LoginButtonClicked}/>
      </div>
    </div>
  )
}