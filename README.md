**Library Management System (MERN Stack):**

A full-stack Library Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage books, request books, upload book images, and filter records dynamically using MongoDB aggregation.

**Features:**
Add, update, view, and delete books (CRUD Operations)
Upload and display book images using Multer
Request books with automatic count increment
MongoDB aggregation-based filtering
Dynamic filtering without page reload
Responsive React UI
RESTful API architecture
SEO-friendly routing and page titles
MongoDB request tracking system

**Tech Stack:**

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

**Project Structure:**

root/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── test/
│   │   ├── app.js
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── package.json

**API Endpoints:**

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

**Aggregation Filters:**

Count Below 5,
Count Between 5 and 10,
Count Above 10
Implemented using MongoDB Aggregation Pipeline.

**Installation:**

**Clone Repository:**

git clone <repository-url>
cd mern-library-system

**Install Dependencies:**

npm install
npm run install-all

**Configure Environment Variables:**

Create a .env file inside the backend folder:

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

**Learning Outcomes:**

Full-stack application development using MERN,
REST API design and integration,
MongoDB aggregation pipelines,
File uploads using Multer,
React state management and routing,
Dynamic UI rendering,
Backend testing with Jest

**Future Enhancements:**

JWT Authentication,
Role-Based Access Control,
Admin Dashboard,
Docker Deployment,
Cloud Storage for Images,
Analytics Dashboard

**Author:**

**Debanjana Mahapatra** ,
B.Tech Computer Science & Information Technology  ,
ITER | Siksha 'O' Anusandhan University
