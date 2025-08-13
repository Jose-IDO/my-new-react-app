import React from 'react'
import { useState } from 'react';
import styles from './landingpagemodcont.module.css';
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule';
import { Buttons } from '../buttons/Buttons'
import { LinksView } from '../LinksView/LinksView';
import { Footer } from '../Footer/Footer';
import type { LinkType } from '../../src/types/LinkTypes'

export const Landingpagemodcont: React.FC = () => {
  const [popup, setPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);  

  const [linkData, setLinkData] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
  });

  const [links, setLinks] = useState<LinkType[]>([]);


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
      setLinks(previousLinks => [...previousLinks, newLink]);
    } else {

      setLinks(previousLinks => 
        previousLinks.map(link => 
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
              links={links}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </Landingpagemodule>
      </div>
      
      <Footer />
    </>
  )
}