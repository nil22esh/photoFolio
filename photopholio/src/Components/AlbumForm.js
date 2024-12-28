import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebaseConfig";

export default function AlbumForm({ refreshAlbums }) {
  const [albumName, setAlbumName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "albums"), { name: albumName });
      setAlbumName("");
      refreshAlbums();
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  const handleClear = () => setAlbumName("");

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add Image To React</h2>
      <div className="form-group">
        <input
          type="text"
          required
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          className="input-field"
        />
        <button type="button" onClick={handleClear} className="clear-btn">
          Clear
        </button>
        <button type="submit" className="create-btn">
          Create
        </button>
      </div>
    </form>
  );
}
