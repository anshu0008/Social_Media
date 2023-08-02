



#website Link :https://socialwebmedia.netlify.app/login


# Fullstack Social Media Application with Google OAuth Authentication and Sanity Backend

Welcome to the Fullstack Social Media Application! This project is a versatile and feature-rich social media platform that integrates Google OAuth for secure user authentication and utilizes Sanity Cloud as the backend for content management. The application offers a seamless and engaging environment for users to connect, share posts, and interact with each other.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Backend with Sanity Cloud](#backend-with-sanity-cloud)
- [Contributing](#contributing)


## Features

- User registration and authentication using Google OAuth.
- Create, edit, and delete posts with rich text and media content.
- Like, comment, and engage with other users' posts.
- User profiles with profile pictures and bio information.
- Secure and scalable backend powered by Sanity Cloud.
- Responsive and dynamic frontend for a seamless user experience.
- Modular and well-organized codebase for easy customization.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following prerequisites:

- Node.js (>=14.x)
- npm (Node Package Manager)
- Sanity Account for backend setup
- Google OAuth credentials

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/anshu0008/Social_Media.git

```

2. Install frontend dependencies:

```bash
cd backend
npm install
```

3. Install backend dependencies:

```bash
cd frontend
npm install
```

## Configuration

Before running the application, you need to configure a few settings:

- Frontend Configuration:
  - Update the Google OAuth client ID in `frontend/src/.env`.

- Backend Configuration:
  - Create a `.env` file in the `backend` directory and add your Sanity API token and project ID:

  ```plaintext
  SANITY_PROJECT_ID=your-sanity-project-id
  SANITY_TOKEN=your-sanity-api-token
  ```

## Usage

1. Start the frontend:

```bash
cd backend
npm start
```

2. Start the backend:

```bash
cd frontend
npm start
```

3. Access the application by visiting `http://localhost:3000` in your web browser.

## Backend with Sanity Cloud

Sanity Cloud powers the backend of this application, providing a content management system for posts, user profiles, and more. To access and manage your content, log in to your Sanity Studio by visiting `https://your-sanity-project-id.sanity.studio`.

## Contributing

We welcome contributions from the community! If you find any issues or want to add new features, feel free to submit a pull request.




Thank you for choosing the Fullstack Social Media Application. We hope this platform provides a valuable social experience for your users! If you have any questions or need assistance, please contact us at anshuagrawal1901302@gmail.com.


