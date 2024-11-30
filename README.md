

```
# Nexus by ClutchCoders

**Nexus** is a modern **community forum** designed for freelancers to connect, collaborate, and communicate seamlessly. Built with a robust stack including **React**, **TypeScript**, **Node.js**, **Socket.IO**, and **MongoDB**, Nexus enables real-time discussions, private messaging, and an intuitive user interface. The platform supports real-time updates, ensuring users stay connected and engaged in meaningful conversations.

---

## **Key Features**
1. **Community Forum**: Centralized space for freelancers to discuss topics, share knowledge, and network.
2. **Private Messaging**: Secure, real-time communication between users.
3. **User Profiles**: Rich user profiles showcasing freelancer skills and experiences.
4. **Real-Time Updates**: Powered by **Socket.IO**, ensuring seamless communication.
5. **Scalable Backend**: Built with **Node.js**, **MongoDB**, and **Express** for robust performance.
6. **Responsive UI**: Designed with **React** and **Vite** for fast and efficient user experiences.

---

## **Tech Stack**
- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, Socket.IO
- **Database**: MongoDB (Cloud-based via Atlas)
- **State Management**: Context API or Redux (as needed)
- **Styling**: TailwindCSS
- **Package Manager**: Yarn

---

## **Dependencies**

#### **Frontend**
- `react`: React.js library
- `react-dom`: React DOM bindings
- `react-router-dom`: Routing library for React
- `typescript`: TypeScript integration
- `tailwindcss`: Utility-first CSS framework
- `vite`: Next-gen build tool
- `socket.io-client`: Socket.IO client for real-time communication

#### **Backend**
- `express`: Web framework for Node.js
- `socket.io`: Socket.IO for real-time communication
- `mongoose`: MongoDB ODM for Node.js
- `dotenv`: Loads environment variables from `.env` file

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone https://github.com/Gaganhalmath/Nexus-by-ClutchCoders.git
cd Nexus-by-ClutchCoders
```

### 2. Install Dependencies
Using **Yarn**, install dependencies for both frontend and backend.

- **Frontend**:
  ```bash
  cd frontend
  yarn install
  ```

- **Backend**:
  ```bash
  cd backend
  yarn install
  ```

### 3. Environment Variables
Create a `.env` file in the `backend` directory and add the following:

```env
DATABASE=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nexus?retryWrites=true&w=majority
PORT=3000
```

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

### 4. Set Up the Database
Ensure you have a MongoDB Atlas cluster set up. Create a database named `nexus` and set your credentials in the `.env` file.

### 5. Start the Backend Server
Navigate to the `backend` directory and run:
```bash
yarn dev
```
This starts the server on `http://localhost:3000`.

### 6. Start the Frontend
Navigate to the `frontend` directory and run:
```bash
yarn dev
```
This starts the client on `http://localhost:5173`.

---

## **Frontend Structure**

#### **Directory: `frontend`**
```
/frontend
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   ├── Navbar/
│   │   └── Profile/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Forum.tsx
│   │   ├── Chat.tsx
│   │   └── Profile.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       └── tailwind.css
├── public/
│   ├── index.html
├── package.json
└── vite.config.ts
```

---

## **Backend Structure**

#### **Directory: `backend`**
```
/backend
├── models/
│   ├── User.js
│   ├── Message.js
├── routes/
│   ├── auth.js
│   ├── message.js
├── config/
│   └── connection.js
├── server.js
├── package.json
└── .env
```

---

## **How to Run**

1. **Run Backend**
   Navigate to the backend directory:
   ```bash
   cd backend
   yarn dev
   ```

2. **Run Frontend**
   Navigate to the frontend directory:
   ```bash
   cd frontend
   yarn dev
   ```

3. **Access the Application**
   - **Frontend**: Open `http://localhost:5173` in your browser.
   - **Backend API**: Available at `http://localhost:3000`.

---

## **Key Scripts**

#### **Backend (`backend/package.json`)**
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

#### **Frontend (`frontend/package.json`)**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## **Common Issues**

1. **MongoDB Connection Error**:
   - Ensure MongoDB Atlas cluster is running.
   - Check `.env` credentials.

2. **Socket.IO Issues**:
   - Confirm the client and server are on the same Socket.IO version.

3. **TailwindCSS not working**:
   - Ensure `tailwind.config.js` is properly set up in the `frontend` directory.



---

### **How to Set Up and Run the Application:**

1. **Clone the Repository**:
   Clone the repository from GitHub using the following command:
   ```bash
   git clone https://github.com/Gaganhalmath/Nexus-by-ClutchCoders.git
   ```

2. **Install Dependencies**:
   - Navigate to the `frontend` and `backend` directories and install dependencies:
   ```bash
   cd frontend
   yarn install
   ```
   ```bash
   cd backend
   yarn install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the `backend` folder and add your MongoDB connection string from MongoDB Atlas.

4. **Start the Servers**:
   - First, start the backend server:
   ```bash
   cd backend
   yarn dev
   ```
   - Then, start the frontend server:
   ```bash
   cd frontend
   yarn dev
   ```

5. **Access the Application**:
   - Open the frontend application at `http://localhost:5173`.
   - Access the backend API at `http://localhost:3000`.

---

### **Files to Create:**

1. **`frontend` directory**:
   - This contains the React app, components, pages, and configuration files like `vite.config.ts`.

2. **`backend` directory**:
   - Contains Node.js API, routes (`auth.js`, `message.js`), models (`User.js`, `Message.js`), and server configuration (`server.js`, `connection.js`).

---

