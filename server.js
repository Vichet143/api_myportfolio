import express from 'express';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import EducationRoute from './routes/EducationRoute.js';
import ProjectRoute from './routes/ProjectRoute.js';
import UserSkillRoute from './routes/UserSkillRoute.js';
import ExperienceRoute from './routes/ExperienceRoute.js'
import CertificateRoute from './routes/CertificationRoute.js'
import SoftSkillRoute from './routes/SoftSkillRoute.js'
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());
// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(UserRoute);
app.use(EducationRoute);
app.use(ProjectRoute);
app.use(UserSkillRoute);
app.use(ExperienceRoute);
app.use(CertificateRoute);
app.use(SoftSkillRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
