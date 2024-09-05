import "./treeImage.css";
import { useState } from "react";

// Upper camelCase
export default function TreeImage() {
  const [showThing, setShowThing] = useState(true);

  const showImage = () => {
    setShowThing(!showThing);
  };

  return (
    <div className='treeImageContainer'>
      <button className='showHideButton' onClick={showImage}>
        Show or hide
      </button>

      {showThing ? (
        <img
          src='https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'
          alt='tree'
          className='treeImage'
        />
      ) : (
        <span>No hay imagen</span>
      )}
    </div>
  );
}
