import GalleryItem from "./GalleryItem/GalleryItem";

function GalleryList(props) {
  // props =  listOfGallery = {listOfGallery}
  //          getGalleryList = { getGalleryList };
  console.log(props);
  return (
    <>
      {props.listOfGallery.map((galleryItem) => {
        // .map = loops through through for each object, and give each a name called (galleryItem);
        // LOOPS 3X because of .map
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            getGalleryList={props.getGalleryList}
          />
        );
      })}
    </>
  );
}

export default GalleryList;
