import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebaseConfig";

export default function ImageForm({ albumId, albumName, refreshImages }) {
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "images"), {
        name: imageName,
        url: imageUrl,
        albumId: albumId,
      });
      setImageName("");
      setImageUrl("");
      refreshImages();
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  const handleClear = () => {
    setImageName("");
    setImageUrl("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add Image To {albumName}</h2>
      <div className="image-form-group">
        <input
          type="text"
          required
          placeholder="Image Title"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          required
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="input-field"
        />
        <div className="buttons">
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear
          </button>
          <button type="submit" className="create-btn">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
