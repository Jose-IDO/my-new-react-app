import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Landingpagemodcont } from '../components/landingpagemodulecont/Landingpagemodcont'
import { Overlay } from '../components/overlay/Overlay'
import type { LinkType } from './types/LinkTypes'
import './app.module.css'

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [filteredLinks, setFilteredLinks] = useState<LinkType[]>([])
  const [allLinks, setAllLinks] = useState<LinkType[]>([])

  useEffect(() => {
    const loadLinks = () => {
      const savedLinks = localStorage.getItem('savedLinks');
      if (savedLinks) {
        try {
          const parsedLinks = JSON.parse(savedLinks);
          if (Array.isArray(parsedLinks)) {
            setAllLinks(parsedLinks);
          }
        } catch (error) {
          console.error('Error loading links:', error);
        }
      }
    };

    loadLinks();
    const interval = setInterval(loadLinks, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!searchInput.trim()) {
      setFilteredLinks([])
      return
    }

    const filtered = allLinks.filter(link => {
      const searchTerm = searchInput.toLowerCase()
      return (
        link.title.toLowerCase().includes(searchTerm) ||
        link.url.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm) ||
        (link.tags && link.tags.toLowerCase().includes(searchTerm))
      )
    })
    
    setFilteredLinks(filtered)
  }, [searchInput, allLinks])

  const LoginButtonClicked = () => {
    setIsLoginVisible(true)
  }

  const CloseOverlay = () => {
    setIsLoginVisible(false)
  }

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value)
  }

  const handleSearchSubmit = (links: LinkType[]) => {
    setAllLinks(links);
  }

  const handleClearSearch = () => {
    setSearchInput('')
    setFilteredLinks([])
  }

  return (
    <>
      <Navbar
        LoginButtonClicked={LoginButtonClicked}
        searchInput={searchInput}
        onSearchInputChange={handleSearchInputChange}
        onSearchSubmit={handleSearchSubmit}
        onClearSearch={handleClearSearch}
      />
      <Landingpagemodcont
        filteredLinks={filteredLinks}
        searchTerm={searchInput}
      />
      <Overlay
        closeoverlay={CloseOverlay}
        isVisible={isLoginVisible}
      />
    </>
  )
}

export default App