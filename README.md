
# Fullstack Social Media Application with Google OAuth Authentication and MongoDB


#website Link :https://socialwebmedia.netlify.app/login


Welcome to the Fullstack Social Media Application! This project is a powerful and customizable social media platform that allows users to connect, share posts, and interact with each other in a seamless and engaging environment. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrates Google OAuth for secure and convenient user authentication.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication using Google OAuth.
- Create, edit, and delete posts with rich text and media content.
- Like, comment, and engage with other users' posts.
- User profiles with profile pictures and bio information.
- Real-time updates using WebSockets for instant notifications.
- Secure and scalable RESTful API built with Express.js and MongoDB.
- Responsive and dynamic frontend built with React and Redux.
- Modular and well-organized codebase for easy customization.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js (>=14.x)
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/fullstack-social-media.git
cd fullstack-social-media
```

2. Install server dependencies:

```bash
cd server
npm install
```

3. Configure your Google OAuth credentials:
   - Go to the [Google Developers Console](https://console.developers.google.com/).
   - Create a new project and enable the Google+ API.
   - Configure the OAuth consent screen and set authorized redirect URIs.
   - Create OAuth 2.0 credentials and copy the Client ID and Client Secret.
   - Paste the credentials into `server/config/auth.config.js`.

4. Install client dependencies:

```bash
cd ../client
npm install
```

## Configuration

Before running the application, you need to configure a few settings:

- Server Configuration:
  - Set up MongoDB connection in `server/config/db.config.js`.
  - Adjust server settings and ports in `server/config/server.config.js`.

- Client Configuration:
  - Update the API base URL in `client/src/utils/api.js`.

## Usage

1. Start the server:

```bash
cd server
npm start
```

2. Start the client:

```bash
cd client
npm start
```

3. Access the application by visiting `http://localhost:3000` in your web browser.

## API Documentation

For detailed information on the RESTful API endpoints, refer to the [API Documentation](api-documentation.md) file.

## Contributing

We welcome contributions from the community! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for choosing the Fullstack Social Media Application. We hope this platform provides a valuable social experience for your users! If you have any questions or need assistance, please contact us at support@example.com.


