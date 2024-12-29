import React, { useState, useEffect } from "react";
import AlbumForm from "./AlbumForm";
import ImagesList from "./ImagesList";
import { collection, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-spinner-material";
import db from "../firebaseConfig";
import "../App.css";

export default function AlbumsList() {
  const [albumsList, setAlbumsList] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch albums from Firestore
  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "albums"));
      setAlbumsList(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      toast.success("Albums loaded successfully!");
    } catch (error) {
      toast.error("Error fetching images. Please try again later.");
      console.error("Error fetching albums:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ToastContainer />
      {/* Modal for adding an album */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <AlbumForm refreshAlbums={fetchAlbums} />
            <button className="close-btn" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {selectedAlbum ? (
        <ImagesList
          albumId={selectedAlbum.id}
          albumName={selectedAlbum.name}
          goBack={() => setSelectedAlbum(null)} // Add a "Go Back" feature
        />
      ) : (
        <div className="albums-container">
          <div className="albumsList-header">
            <h2>Your Albums</h2>
            <button
              type="submit"
              className="create-btn"
              onClick={handleOpenModal}
            >
              Add Album
            </button>
          </div>
          {isLoading ? (
            <div className="spinner-container">
              <Spinner
                radius={50}
                color={"#4caf50"}
                stroke={5}
                visible={true}
              />
            </div>
          ) : (
            <div className="albums-list">
              {albumsList.length > 0 ? (
                albumsList.map((album) => (
                  <div
                    className="album-card"
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6521/6521096.png"
                      alt="album-icon"
                      className="album-icon"
                      width={40}
                    />
                    <h3>{album.name}</h3>
                  </div>
                ))
              ) : (
                <h1>No Albums Found!</h1>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
