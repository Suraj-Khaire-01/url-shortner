# URL Shortener Service

A lightweight URL shortening service developed with Node.js, Express, and MongoDB. This application transforms lengthy URLs into compact, user-friendly short codes and handles redirection from shortened links back to their original destinations.

## Core Functionality

- **URL Compression**: Transform extensive URLs into concise, unique identifiers
- **Automatic Redirection**: Seamlessly redirect users from shortened URLs to original destinations  
- **Data Persistence**: Maintain URL mappings using MongoDB database storage
- **Exception Management**: Handle invalid URLs and missing short codes gracefully

## Technology Stack

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Minimalist web framework for Node.js
- **MongoDB**: Document-oriented NoSQL database for URL storage
- **Mongoose**: Object Document Mapper (ODM) for MongoDB and Node.js
- **EJS**: Template engine for rendering dynamic web pages
- **Dotenv**: Environment variable management from `.env` files

## Setup Instructions

Follow these steps to configure and launch the project on your local machine:

1. **Repository Setup**:
   ```bash
   git clone <repository_url>
   cd url_shortner
   ```

2. **Dependency Installation**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the project root and configure these variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000
   PORT=3000
   ```
   
   *Note: Replace `your_mongodb_connection_string` with your MongoDB connection details (local instance: `mongodb://localhost:27017/urlshortener` or cloud service like MongoDB Atlas)*

## Getting Started

1. **Launch the Application**:
   ```bash
   npm start
   ```
   
   The service will be available at `http://localhost:3000` (or your configured `PORT` value).

2. **Web Interface Access**:
   Navigate to `http://localhost:3000` in your preferred web browser.

3. **Creating Short URLs**:
   Input your long URL into the text field and select the "Shorten" button to generate a compact URL.

4. **Using Shortened URLs**:
   Visit the generated short URL (format: `http://localhost:3000/your_short_code`) to be automatically redirected to the original website.
