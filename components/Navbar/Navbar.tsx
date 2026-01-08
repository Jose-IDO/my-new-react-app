import { SearchBar } from '../SearchBar/SearchBar'
import { Buttons } from '../buttons/Buttons'
import styles from './navbar.module.css'

type NavbarProps = {
  searchInput: string;
  onSearchInputChange: (value: string) => void;
  onClearSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchInput,
  onSearchInputChange,
  onClearSearch
}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.searchcontainer}>
          <div className={styles.searchgroup}>
            <SearchBar 
              searchValue={searchInput}
              onSearchChange={onSearchInputChange}
              placeholder="Search your links by title, URL, description, or tags..."
            />
            {searchInput && (
              <div className={styles.searchbuttons}>
                <Buttons bgColor="bgRed" onClick={onClearSearch}>
                  Clear
                </Buttons>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}