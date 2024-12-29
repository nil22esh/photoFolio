# PhotoFolio 📸

PhotoFolio is a modern React-based application for managing photo albums and images. With an intuitive interface and seamless integration with Firebase, PhotoFolio simplifies the organization and viewing of your photo collections.

---

## Features ✨

- **Album Management**: Create and manage multiple albums effortlessly.
- **Image Management**: Add, edit, search, and delete images within albums.
- **Image Carousel**: View your album images in a responsive carousel.
- **Search Capability**: Easily locate images using the search functionality.
- **Real-Time Notifications**: Get instant feedback with `react-toastify`.
- **Spinner Animation**: Enhanced user experience with loading indicators.
- **Firebase Integration**: Secure and scalable backend using Firestore.

---

## Installation and Setup 🛠️

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/photopholio.git
cd photopholio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
- Replace the placeholders in `firebaseConfig.js` with your Firebase credentials:
  ```javascript
  const firebaseConfig = {
    apiKey: "Your Firebase API Key",
    authDomain: "Your Firebase Auth Domain",
    projectId: "Your Firebase Project ID",
    storageBucket: "Your Firebase Storage Bucket",
    messagingSenderId: "Your Firebase Messaging Sender ID",
    appId: "Your Firebase App ID",
  };
  ```

### 4. Start the Development Server

```bash
npm start
```

Visit the app at [http://localhost:3000](http://localhost:3000).

---

## Project Structure 🗂️

```plaintext
src/
├── Components/
│   ├── AlbumsList.js       # Displays the list of albums and handles album selection
│   ├── AlbumForm.js        # Form component for creating new albums
│   ├── ImagesList.js       # Manages images within a selected album
│   ├── ImageForm.js        # Form for adding or editing an image
│   ├── Carousel.js         # Carousel for navigating through album images
│   ├── Navbar.js           # Navigation bar with branding
├── firebaseConfig.js       # Firebase configuration file
├── App.js                  # Root component rendering Navbar and AlbumsList
└── App.css                 # Application-wide CSS styles
```

---

## Component Details 🛠️

### **App.js**

- The root component of the app.
- Integrates the `Navbar` and `AlbumsList` components.

### **Navbar.js**

- Displays the application’s title and logo.
- Provides consistent branding across the app.

### **AlbumsList.js**

- Lists all available albums fetched from Firebase.
- Allows users to create a new album using the `AlbumForm` component.
- Enables navigation to images within a selected album.

### **AlbumForm.js**

- A modal-based form for creating new albums.
- Handles album input and submission to Firebase.

### **ImagesList.js**

- Displays all images in a selected album.
- Features search, edit, and delete functionalities for images.
- Integrates the `ImageForm` for adding new images.

### **ImageForm.js**

- Form for uploading or editing images.
- Captures image title and URL for submission to Firebase.

### **Carousel.js**

- Enables users to navigate through images in a full-screen overlay.
- Supports next/previous navigation with buttons.

### **firebaseConfig.js**

- Contains the Firebase configuration for Firestore integration.

---

## Dependencies 📦

- **React**: A library for building user interfaces.
- **Firebase**: Used for Firestore database integration.
- **React Toastify**: Provides elegant toast notifications.
- **React Spinner Material**: Displays loading indicators.
- **CSS Modules**: For styling components.

---

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure you follow the coding guidelines.

---
