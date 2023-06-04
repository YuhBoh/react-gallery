import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [listOfGallery, setListOfGallery] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, [])


  const getGalleryList = () => { //Just gets Gallery List from gallery.data

    axios({
      method:'GET',
      url:'/gallery', // LOOK AT SERVER.JS
    }).then((response) => {
      setListOfGallery(response.data);
      console.log(response); 

    }).catch((error) => {
      console.log('App.js Err:', error);
    })
  }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <div className="gallery-list-container">
          <p>Gallery goes here</p>

          <div className="gallery-container">
        
          <GalleryList 
            listOfGallery = {listOfGallery}
            getGalleryList = {getGalleryList} 
            //send function to get updated list DOM to re-render with.    
          /> 
          
          </div>
          
        </div>

      </div>
    );
}

export default App;
