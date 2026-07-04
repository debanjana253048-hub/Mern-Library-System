### Library Management System (MERN Stack):

A full-stack Library Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage books, request books, upload book images, and filter records dynamically using MongoDB aggregation.

---

### Features:
Add, update, view, and delete books (CRUD Operations)
Upload and display book images using Multer
Request books with automatic count increment
MongoDB aggregation-based filtering
Dynamic filtering without page reload
Responsive React UI
RESTful API architecture
SEO-friendly routing and page titles
MongoDB request tracking system

---

### Tech Stack:

**Frontend:**
React.js,
Vite,
Axios,
React Router DOM,
CSS3

**Backend:**
Node.js,
Express.js,
MongoDB,
Mongoose,
Multer

**Testing:**
Jest,
Supertest

---

## Project Structure

```text
mern-library-system/
│
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── models/
│   │   │   │   ├── post.js
│   │   │   │   └── request.js
│   │   │   └── connection.js
│   │   │
│   │   ├── routes/
│   │   │   └── posts.js
│   │   │
│   │   ├── services/
│   │   │   └── upload.js
│   │   │
│   │   ├── test/
│   │   │   └── posts.test.js
│   │   │
│   │   ├── app.js
│   │   └── index.js
│   │
│   ├── uploads/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── components/
│   │   │   ├── CreatePost.jsx
│   │   │   └── PostList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   ├── home-page.png
│   ├── books-page.png
│   ├── add-book-page.png
│   └── book-request.png
│
├── package.json
└── README.md
```

---

### API Endpoints:

**Books:**
| Method | Endpoint       | Description                       |
| ------ | -------------- | --------------------------------- |
| POST   | /api/books     | Add a new book or increment count |
| GET    | /api/books     | Get all books                     |
| PUT    | /api/books/:id | Update book details               |
| DELETE | /api/books/:id | Delete a book                     |

**Request Book:**
| Method | Endpoint           | Description                        |
| ------ | ------------------ | ---------------------------------- |
| POST   | /api/books/request | Request a book and increment count |

---

### Aggregation Filters:

Count Below 5,
Count Between 5 and 10,
Count Above 10
Implemented using MongoDB Aggregation Pipeline.

---

### Installation:

**Clone Repository:**

git clone <repository-url>
cd mern-library-system

**Install Dependencies:**

npm install
npm run install-all

---

## Configure Environment Variables:

**Create a .env file inside the backend folder:**

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library

**Start MongoDB:**

mongod --dbpath C:\data\db

**Run Application:**

npm run dev

**Application URLs:**

**Frontend:**

http://localhost:5173

**Backend:**

http://localhost:5000

---

## Screenshots

### Home Page
<img width="1366" height="612" alt="Screenshot (212)" src="https://github.com/user-attachments/assets/9f75f383-3607-4850-ace3-3f91d2ef959f" />


---

### Books Page
<img width="1361" height="612" alt="Screenshot (213)" src="https://github.com/user-attachments/assets/10189709-2c82-490c-bc48-ed7517b425b0" />


---

### Add Book Page
<img width="1366" height="614" alt="Screenshot (214)" src="https://github.com/user-attachments/assets/55a6572a-6e4d-4093-a56f-c07670d7b044" />


---

### Book Request Feature
<img width="1366" height="607" alt="Screenshot (215)" src="https://github.com/user-attachments/assets/28196da3-2ad7-4866-af19-4ddaa3ab157b" />

<img width="1366" height="607" alt="Screenshot (216)" src="https://github.com/user-attachments/assets/3c98e675-30b5-4888-af15-c4a684ebdda1" />

<img width="1366" height="609" alt="Screenshot (217)" src="https://github.com/user-attachments/assets/ecfbba43-b251-470d-aa14-ce94de167d43" />

---

### Learning Outcomes:

Full-stack application development using MERN,
REST API design and integration,
MongoDB aggregation pipelines,
File uploads using Multer,
React state management and routing,
Dynamic UI rendering,
Backend testing with Jest

---

### Future Enhancements:

JWT Authentication,
Role-Based Access Control,
Admin Dashboard,
Docker Deployment,
Cloud Storage for Images,
Analytics Dashboard

---

### Author:

**Debanjana Mahapatra** ,
B.Tech Computer Science & Information Technology  ,
ITER | Siksha 'O' Anusandhan University
