# File Uploader

File Uploader is a web application that allows users to upload files, view a list of uploaded files, and delete specific files. The application is built using React with TypeScript for the frontend and Node.js with TypeScript for the backend. It utilizes MySQL as the database and Express.js for handling API requests. Additionally, the application is configured to run on Docker containers for easy deployment.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

File Uploader provides a user-friendly interface for managing file uploads. Users can easily upload files, view a list of uploaded files, and delete specific files as needed. The application is designed to handle files up to 10MB in size and utilizes modern web technologies for optimal performance and reliability.

## Features

- Display a table of uploaded files showing File Name, File Size, and Uploaded Date.
- Restrict file uploads to a maximum size of 10MB.
- Allow users to upload files by selecting the file only.
- Enable users to remove specific files from the list.
- Utilize ANTD (Ant Design) for UI components.

## Tech Stack

- React with TypeScript (Frontend)
- Node.js with TypeScript (Backend)
- MySQL (Database)
- Express.js (Backend Framework)

## Installation

1. Clone the repository:

```
git clone https://github.com/tamiopia/file-uploader.git
```

2. Navigate to the project directory:

```
cd file-uploader
```

3. Install dependencies for frontend:

```
cd frontend
npm install
```

4. Install dependencies for backend:

```
cd ../backend
npm install
```

5. Create a MySQL database named `file_uploader` and update the database configuration in the backend `config.ts` file.

6. Run the application:

```
docker-compose up -d --build
```

## Usage

1. Access the application in your web browser at `http://localhost:5000`.
2. Upload files by clicking the "Upload File" button and selecting the desired file.
3. View the list of uploaded files on the dashboard.
4. To remove a file, click the delete icon next to the file in the list.

## API Endpoints

- `GET /api/files`: Get a list of uploaded files.
- `POST /api/files`: Upload a new file.
- `DELETE /api/files/:id`: Delete a specific file by ID.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the application.

## License

This project is licensed under the [MIT License](LICENSE).
