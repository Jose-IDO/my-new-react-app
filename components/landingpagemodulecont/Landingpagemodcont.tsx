import React, { useState, useCallback } from 'react';
import styles from '../landingpagemodulecont/landingpagemodcont.module.css';
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule';
import { Buttons } from '../buttons/Buttons';
import { LinksView } from '../LinksView/LinksView';
import { Footer } from '../Footer/Footer';
import { AboutUsOverlay } from '../AboutUsOverlay/AboutUsOverlay';
import { useLocalStorage } from '../../src/hooks/useLocalStorage';
import { validateLink } from '../../src/utils/validation';
import type { LinkType } from '../../src/types/LinkTypes';

type LandingpagemodcontProps = {
  filteredLinks: LinkType[];
  searchTerm: string;
  allLinks: LinkType[];
}

export const Landingpagemodcont: React.FC<LandingpagemodcontProps> = ({ 
  filteredLinks, 
  searchTerm,
  allLinks 
}) => {
  const [popup, setPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { links, setLinks } = useLocalStorage();

  const [linkData, setLinkData] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
  });

  const handleInputChange = useCallback((field: keyof typeof linkData) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLinkData(prev => ({
        ...prev,
        [field]: event.target.value
      }));
      setError(null);
    }, []
  );

  const handleAddLink = useCallback(() => {
    const validation = validateLink(linkData.title, linkData.url);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid input');
      return;
    }

    if (editingId === null) {
      const newLink: LinkType = {
        id: Date.now(),
        title: linkData.title.trim(),
        url: linkData.url.trim(),
        description: linkData.description.trim(),
        tags: linkData.tags.trim()
      };
      setLinks([...links, newLink]);
    } else {
      setLinks(links.map(link => 
        link.id === editingId 
          ? { 
              ...link, 
              title: linkData.title.trim(), 
              url: linkData.url.trim(), 
              description: linkData.description.trim(), 
              tags: linkData.tags.trim() 
            }
          : link
      ));
    }

    setLinkData({ title: '', url: '', description: '', tags: '' });
    setPopup(false);
    setIsEditing(false);
    setEditingId(null);
    setError(null);
  }, [linkData, editingId, links, setLinks]);

  const handleClosePopup = useCallback(() => {
    setPopup(false);
    setIsEditing(false);
    setEditingId(null);
    setLinkData({ title: '', url: '', description: '', tags: '' });
    setError(null);
  }, []);

  const handleOpenPopup = useCallback(() => {
    setPopup(true);
    setError(null);
  }, []);

  const handleEdit = useCallback((link: LinkType) => {
    setLinkData({
      title: link.title || '',
      url: link.url || '',
      description: link.description || '',
      tags: link.tags || ''
    });
    setIsEditing(true);
    setEditingId(link.id);
    setPopup(true);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDelete = useCallback((id: number) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      setLinks(prevLinks => prevLinks.filter(link => link.id !== id));
    }
  }, [setLinks]);

  const displayLinks = filteredLinks.length > 0 ? filteredLinks : links;

  return (
    <>
      <div className={styles.landingpagemodulecont}>
        
        <Landingpagemodule modcolor="modcolorone">
          <div className={styles.firstmodule}>
            South Africas #1 link storage solution
            <div className={styles.subtext}>
              Save, organize, and access your favorite links from anywhere - no browser limitations
            </div>
            <Buttons bgColor="contbuttonone" onClick={handleOpenPopup}>
              Add your link
            </Buttons>

            {popup && (
              <div className={styles.popupBox} role="dialog" aria-labelledby="popup-title" aria-modal="true">
                <p id="popup-title">{isEditing ? 'Edit your link' : 'Add your link below'}</p>
                <div className={styles.popupContent}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Bookmark title *" 
                      className={styles.input}
                      value={linkData.title}
                      onChange={handleInputChange('title')}
                      aria-label="Bookmark title"
                      aria-required="true"
                      autoFocus
                    />
                  
                    <input 
                      type="url" 
                      placeholder="Paste your bookmark URL *" 
                      className={styles.input}
                      value={linkData.url}
                      onChange={handleInputChange('url')}
                      aria-label="Bookmark URL"
                      aria-required="true"
                    />
                 
                    <input 
                      type="text" 
                      placeholder="Bookmark description" 
                      className={styles.input}
                      value={linkData.description}
                      onChange={handleInputChange('description')}
                      aria-label="Bookmark description"
                    />
               
                    <input 
                      type="text" 
                      placeholder="Bookmark tags (comma separated)" 
                      className={styles.input}
                      value={linkData.tags}
                      onChange={handleInputChange('tags')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleAddLink();
                        }
                      }}
                      aria-label="Bookmark tags"
                    />
                    {error && (
                      <div className={styles.errorMessage} role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                   
                  <Buttons bgColor="popupbuttonone" onClick={handleAddLink}>
                    {isEditing ? 'Update bookmark' : 'Add bookmark'}
                  </Buttons>
                  <Buttons bgColor="popupbuttontwo" onClick={handleClosePopup}>
                    Close
                  </Buttons>
                </div>
              </div>
            )}
          </div>  
        </Landingpagemodule>

        <Landingpagemodule modcolor="modcolorone">
          <div className={styles.secondmodule}>
            <LinksView 
              links={displayLinks}
              onEdit={handleEdit}
              onDelete={handleDelete}
              allLinksCount={links.length}
              activeSearchTerm={searchTerm}
            />
          </div>
        </Landingpagemodule>
      </div>
      
      <Footer onAboutUsClick={() => setShowAboutUs(true)} />
      <AboutUsOverlay 
        isVisible={showAboutUs} 
        closeOverlay={() => setShowAboutUs(false)} 
      />
    </>
  )
}