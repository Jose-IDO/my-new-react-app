import React from 'react'
import { useState } from 'react';
import styles from './landingpagemodcont.module.css';
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule';
import { Buttons } from '../buttons/Buttons'
import { LinksView } from '../LinksView/LinksView';
import { Footer } from '../Footer/Footer';
import type { LinkType } from '../../src/types/LinkTypes'

 
export const Landingpagemodcont: React.FC = () => {
   const [popup, setPopup] = useState(false) 

   const [linkData, setLinkData] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
   });

   const [links, setLinks] = useState<LinkType[]>([]);

   const handleInputChange = (field: keyof typeof linkData, value: string) => {
    setLinkData(prev => ({
      ...prev,
      [field]: value
    }));
  };

   const handleAddLink = () => {
    const newLink: LinkType = {
      id: Date.now(),
      title: linkData.title,
      url: linkData.url,
      description: linkData.description,
      tags: linkData.tags
    };

    setLinks(previousLinks => [...previousLinks, newLink]);

    setLinkData({ 
      title: '', 
      url: '', 
      description: '', 
      tags: '' 
    });

    setPopup(false);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

   const handleOpenPopup = () => {
    setPopup(true);
  };

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
              Add your first link
            </Buttons>

            {popup && (
              <div className={styles.popupBox}>
                <p>Add your first link below</p>
                <div className={styles.popupContent}>
                  <div>
                
                    <input 
                      type="text" 
                      placeholder="bookmark title" 
                      className={styles.input}
                      value={linkData.title}
                      onChange={(event) => handleInputChange('title', event.target.value)}
                    />
                  
                    <input 
                      type="url" 
                      placeholder="Paste your bookmark" 
                      className={styles.input}
                      value={linkData.url}
                      onChange={(event) => handleInputChange('url', event.target.value)}
                    />
                 
                    <input 
                      type="text" 
                      placeholder="Bookmark description" 
                      className={styles.input}
                      value={linkData.description}
                      onChange={(event) => handleInputChange('description', event.target.value)}
                    />
               
                    <input 
                      type="text" 
                      placeholder="bookmark tags" 
                      className={styles.input}
                      value={linkData.tags}
                      onChange={(event) => handleInputChange('tags', event.target.value)}
                    />
                  </div>
                   
                  <Buttons bgColor="popupbuttonone" onClick={handleAddLink}>
                    Add bookmark
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
            <LinksView links={links} />
          </div>  
        </Landingpagemodule>
      </div>
      
      <Footer />
    </>
  )
}