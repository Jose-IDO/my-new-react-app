import React from 'react'
import styles from './SearchBar.module.css'

type SearchBarProps = {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search your links by title, URL, description, or tags...",
  className 
}) => {
  return (
    <input 
      type="text" 
      className={`${styles.searchbar} ${className || ''}`}
      placeholder={placeholder}
    />
  )
}