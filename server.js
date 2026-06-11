import express from 'express';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());
// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(UserRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
