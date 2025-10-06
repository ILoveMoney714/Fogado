# Backend Project

This is a backend project that connects to a database named "test". It is built using Node.js and Express, and it includes functionality to test the database connection.

## Project Structure

```
backend-project
├── src
│   ├── app.js               # Entry point of the application
│   ├── config
│   │   └── database.js      # Database connection configuration
│   ├── queries
│   │   └── testConnection.js # Query to test the database connection
│   └── routes
│       └── index.js         # Route definitions
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd backend-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=test
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

Once the application is running, you can test the database connection by accessing the appropriate route (e.g., `http://localhost:3000/test-connection`). This will execute a simple query to verify that the connection to the "test" database is successful.

## License

This project is licensed under the MIT License.