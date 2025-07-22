# URL Shortener

This is a simple URL shortener application built with Node.js, Express, and MongoDB. It allows users to shorten long URLs into more manageable, short codes, and then redirects to the original URL when the short code is accessed.

## Features

- **Shorten URLs**: Convert long URLs into short, unique codes.
- **Redirect**: Redirect from the short URL to the original long URL.
- **Persistence**: Store short and long URL mappings in a MongoDB database.
- **Error Handling**: Basic error handling for invalid URLs or non-existent short codes.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing URL mappings.
- **Mongoose**: MongoDB object data modeling (ODM) for Node.js.
- **EJS**: Embedded JavaScript templating for dynamic views.
- **Dotenv**: Loads environment variables from a `.env` file.


## Installation

To set up and run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd url_shortner
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root directory of the project and add the following variables:
    ```
    MONGODB_URI=your_mongodb_connection_string
    BASE_URL=http://localhost:3000
    PORT=3000
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., `mongodb://localhost:27017/urlshortener` or a MongoDB Atlas URI).

## Usage

1.  **Start the server**:
    ```bash
    npm start
    ```
    The application will typically run on `http://localhost:3000` (or the `PORT` specified in your `.env` file).

2.  **Access the application**:
    Open your web browser and navigate to `http://localhost:3000`.

3.  **Shorten a URL**:
    Enter a long URL in the provided input field and click the "Shorten" button. A short URL will be generated.

4.  **Redirect to original URL**:
    Access the generated short URL (e.g., `http://localhost:3000/your_short_code`) in your browser to be redirected to the original long URL.

