import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../landingpagemodulecont/landingpagemodcont.module.css'
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule';
import { Buttons } from '../buttons/Buttons'
import { LinksView } from '../LinksView/LinksView';
import { Footer } from '../Footer/Footer';
import { AboutUsOverlay } from '../AboutUsOverlay/AboutUsOverlay';
import type { LinkType } from '../../src/types/LinkTypes'

type LandingpagemodcontProps = {
  filteredLinks: LinkType[];
  searchTerm: string;
}

export const Landingpagemodcont: React.FC<LandingpagemodcontProps> = ({ filteredLinks, searchTerm }) => {
  const [popup, setPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);
  const [showAboutUs, setShowAboutUs] = useState(false);  

  const [linkData, setLinkData] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
  });

  const [links, setLinks] = useState<LinkType[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLinks = localStorage.getItem('savedLinks');
    if (savedLinks) {
      try {
        const parsedLinks = JSON.parse(savedLinks);
        if (Array.isArray(parsedLinks) && parsedLinks.length > 0) {
          setLinks(parsedLinks);
        }
      } catch (error) {
        console.error('Error loading saved links:', error);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('savedLinks', JSON.stringify(links));
    }
  }, [links, isInitialized]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkData({
      ...linkData,
      title: event.target.value
    });
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkData({
      ...linkData,
      url: event.target.value
    });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkData({
      ...linkData,
      description: event.target.value
    });
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkData({
      ...linkData,
      tags: event.target.value
    });
  };

  const handleAddLink = () => {
    if (editingId === 0) {
      const newLink: LinkType = {
        id: Date.now(),
        title: linkData.title,
        url: linkData.url,
        description: linkData.description,
        tags: linkData.tags
      };
      setLinks([...links, newLink]);
    } else {
      setLinks(links.map(link => 
          link.id === editingId 
            ? { ...link, title: linkData.title, url: linkData.url, description: linkData.description, tags: linkData.tags }
            : link
        )
      );
    }

    setLinkData({ 
      title: '', 
      url: '', 
      description: '', 
      tags: '' 
    });
    setPopup(false);
    setIsEditing(false);
    setEditingId(0);  
  };

  const handleClosePopup = () => {
    setPopup(false);
    setIsEditing(false);
    setEditingId(0); 
    setLinkData({ title: '', url: '', description: '', tags: '' });
  };

  const handleOpenPopup = () => {
    setPopup(true);
  };

  const handleEdit = (link: LinkType) => {
    setLinkData({
      title: link.title,
      url: link.url,
      description: link.description,
      tags: link.tags
    });
    setIsEditing(true);
    setEditingId(link.id);  
    setPopup(true);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this link?');
    if (confirmDelete) {
      setLinks(previousLinks => previousLinks.filter(link => link.id !== id));
    }
  };

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
              <div className={styles.popupBox}>
                <p>{isEditing ? 'Edit your link' : 'Add your link below'}</p>
                <div className={styles.popupContent}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="bookmark title" 
                      className={styles.input}
                      value={linkData.title}
                      onChange={handleTitleChange}
                    />
                  
                    <input 
                      type="url" 
                      placeholder="Paste your bookmark" 
                      className={styles.input}
                      value={linkData.url}
                      onChange={handleUrlChange}
                    />
                 
                    <input 
                      type="text" 
                      placeholder="Bookmark description" 
                      className={styles.input}
                      value={linkData.description}
                      onChange={handleDescriptionChange}
                    />
               
                    <input 
                      type="text" 
                      placeholder="bookmark tags" 
                      className={styles.input}
                      value={linkData.tags}
                      onChange={handleTagsChange}
                    />
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