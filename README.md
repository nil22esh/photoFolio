# PhotoFolio:

### PhotoFolio is an online photo album react app that allows users to upload, organize, and share their digital photos.

---

# PhotoPholio:

### PhotoPholio is a React-based application integrated with Firebase Firestore for managing photo albums and images. The application enables users to create, view, edit, delete, and search albums and images seamlessly.

---

## **Features**:

### **Album Management**:

- View a list of albums.
- Create new albums using a modal form.
- Click on an album to view its images.

### **Image Management**:

- Add images to a specific album with titles and URLs.
- Edit and delete existing images.
- View images in a full-screen carousel.
- Search images within an album by title.

### **Firebase Integration**:

- Firestore is used to store album and image data.
- Implements real-time CRUD operations for albums and images.

---

## **Installation**:

### **Prerequisites**:

- Node.js installed on your machine.
- Firebase project configured.

### **Steps**:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd PhotoPholio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Firebase:

   - Replace placeholders in `firebaseConfig.js` with your Firebase project details:
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

4. Start the development server:
   ```bash
   npm start
   ```

---

## **Project Structure**

```
PhotoPholio/
├── public/
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── AlbumsList.js
│   │   ├── AlbumForm.js
│   │   ├── ImagesList.js
│   │   ├── ImageForm.js
│   │   ├── Carousel.js
│   ├── firebaseConfig.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── package.json
└── README.md
```

### **Key Components**

- **`App.js`**: Main component that integrates the Navbar and AlbumsList.
- **`Navbar.js`**: Displays the navigation bar with the app logo and title.
- **`AlbumsList.js`**: Handles album listing, selection, and modal for album creation.
- **`AlbumForm.js`**: Form for adding new albums.
- **`ImagesList.js`**: Displays images for a selected album with functionality for search, edit, delete, and carousel.
- **`ImageForm.js`**: Form for adding images to an album.
- **`Carousel.js`**: Slideshow for viewing images in a full-screen modal.

---

## **How It Works**

1. **Navbar**: Provides branding and navigation.
2. **AlbumsList**:
   - Fetches albums from Firestore and displays them.
   - Allows adding new albums via a modal form.
   - Opens `ImagesList` for a selected album.
3. **ImagesList**:
   - Fetches images associated with the selected album.
   - Supports adding, editing, deleting, and searching images.
   - Opens `Carousel` for viewing images.
4. **Carousel**:
   - Displays images in a slideshow with navigation controls.
5. **Firebase**:
   - `getDocs` for fetching data.
   - `addDoc` for adding albums/images.
   - `deleteDoc` for removing images.

---

## **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request.

---
