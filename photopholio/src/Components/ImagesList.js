import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import Carousel from "./Carousel";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-spinner-material";
import "../App.css";

export default function ImagesList({ albumId, albumName, goBack }) {
  const [imagesList, setImagesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "images"));
      setImagesList(
        querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((image) => image.albumId === albumId)
      );
      toast.success("Images loaded successfully!");
    } catch (error) {
      toast.error("Error fetching images. Please try again later.");
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [albumId]);

  const handleEditImage = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleDeleteImage = async (id) => {
    try {
      await deleteDoc(doc(db, "images", id));
      fetchImages();
      toast.success("Image deleted successfully!");
    } catch (error) {
      toast.error("Error deleting image. Please try again later.");
      console.error("Error deleting image:", error);
    }
  };

  const filteredImages = imagesList.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ToastContainer />
      {isModalOpen && (
        <div className="imageModal">
          <div className="image-modal-content">
            <ImageForm
              albumId={albumId}
              albumName={albumName}
              refreshImages={fetchImages}
            />
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {isCarouselOpen && (
        <Carousel
          images={filteredImages}
          initialIndex={currentImageIndex}
          onClose={() => setIsCarouselOpen(false)}
        />
      )}
      <div className="images-container">
        <div className="imagesList-header">
          <button className="go-back-btn" onClick={goBack}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"
              alt="Go Back"
              className="goBack"
            />
          </button>
          <h2>Images in {albumName}</h2>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-field"
            />
          )}
          <button
            className="search-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"
              alt="Search"
              className="search"
            />
          </button>
          <button className="create-btn" onClick={() => setIsModalOpen(true)}>
            Add Image
          </button>
        </div>
        {isLoading ? (
          <div className="spinner-container">
            <Spinner radius={50} color={"#4caf50"} stroke={5} visible={true} />
          </div>
        ) : (
          <div className="images-list">
            {filteredImages.length > 0 ? (
              filteredImages.map((image, index) => (
                <div className="image-card" key={image.id}>
                  <div className="image-hover-icons">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png"
                      alt="Edit"
                      className="icon edit-icon"
                      onClick={() => handleEditImage(image)}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                      alt="Delete"
                      className="icon delete-icon"
                      onClick={() => handleDeleteImage(image.id)}
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="image-icon"
                      onClick={() => setIsCarouselOpen(true)}
                      width={40}
                    />
                  </div>
                  <h3>{image.name}</h3>
                </div>
              ))
            ) : (
              <h1>No Images Found!</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
}
