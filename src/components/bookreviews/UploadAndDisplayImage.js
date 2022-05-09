import { useState } from "react";

import classes from "./UploadAndDisplayImage.module.css";

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  props.onAddImage({
    img: selectedImage,
  });
  
  return (
    <div >
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <br />
          <br />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="myImage">Upload Book Cover</label>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
