# Backend My Portfolio

This repository contains the backend for a personal portfolio application using Express.js, Firebase Firestore, and Cloudinary for image uploads.

## Features

- User profile management with image upload
- Education entries
- Projects management
- Skills collection
- Work experience entries
- Certifications management
- Firebase Firestore as the database
- Cloudinary for image storage

## Requirements

- Node.js 18+ or compatible
- npm
- Firebase service account credentials
- Cloudinary account credentials

## Install

```bash
npm install
```

## Environment

Create a `.env` file in the project root with these values:

```env
PORT=3000
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY_CLOUD=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

The project also uses `config/portfolio-ccfaa-firebase-adminsdk-fbsvc-21593ef2bc.json` for Firebase admin credentials.

## Run

```bash
npm run dev
```

The server listens on `http://localhost:3000` by default.

## API Endpoints

### Users

- `POST /users`
  - Upload profile image with `profile_image`
  - Body fields: `full_name`, `email`, `phone_number`, `bio`, `github_url`, `linkedin_url`, `telegram_url`
- `PUT /users`
  - Update profile information with optional `profile_image`
- `GET /users`
  - Retrieve user data

### Education

- `POST /education`
- `PUT /education`
- `GET /education`

### Projects

- `POST /projects`
- `PUT /projects`
- `GET /projects`

Example project body:

```json
{
  "title": "Portfolio Website",
  "project_type": "web",
  "description": "Personal portfolio built with React and Node.js",
  "project_skill": ["React", "Node.js", "Firebase"],
  "image_url": "https://example.com/image.png",
  "github_uril_frontend": "https://github.com/user/frontend",
  "github_uril_backend": "https://github.com/user/backend",
  "live_demo_url": "https://example.com",
  "start_date": "2024-01-01",
  "end_date": "2024-03-01"
}
```

### User Skills

- `POST /Userskill`
- `PUT /Userskill`
- `GET /Userskill`

### Experience

- `POST /experience`
- `PUT /experience`
- `GET /experience`

### Certifications

- `POST /certificate`
- `PUT /certificate`
- `GET /certificate`

## Notes

- The backend is configured as an ES module project (`type: module` in `package.json`).
- CORS is enabled for all routes.
- The Express server uses JSON request body parsing.

## License

ISC
