import React from 'react'
import styles from './SearchBar.module.css'

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  onSearchChange?: (value: string) => void;  
  searchValue?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;                     
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search your links by title, URL, description, or tags...",
  className,
  onSearchChange,
  searchValue = '',
  onKeyPress
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <input 
      type="search"
      className={`${styles.searchbar} ${className || ''}`}
      placeholder={placeholder}
      value={searchValue}
      onChange={handleInputChange}
      onKeyPress={onKeyPress}
      aria-label="Search links"
    />
  )
}