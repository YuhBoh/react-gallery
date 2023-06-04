import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem(props) {
  const [description, setDescription] = useState("off");

  const toggleDescription = () => {
    // console.log(props.galleryItem.description);
    if (description === "off") {
      setDescription("on");
    } else {
      setDescription("off");
    }
  };

  const showDescription = () => {
    if (description === "on") {
      return <div>{props.galleryItem.description}</div>;
    } else {
      return <img className="img-container" src={props.galleryItem.path} />;
    }
  };

  const putLikeCounter = () => {
    axios({
      method: "PUT",
      url: `/gallery/like/${props.galleryItem.id}`,
    })
      .then((response) => {
        props.getGalleryList();
      })
      .catch((err) => {
        console.log(`GalleryItem.js err:`, err);
      });
  };

  return (
    <div>
      <div onClick={toggleDescription}  className="img-container">
        {showDescription()}
      </div>

      <div>
        <button onClick={putLikeCounter}>❤️</button>
        <p>Likes: {props.galleryItem.likes}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
