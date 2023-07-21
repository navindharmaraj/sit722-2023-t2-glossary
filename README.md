# SIT722 DevOps Glossary - Express.js Application

## Description

This repository contains an Express.js web application developed for SIT722 - DevOps Glossary at Deakin University. The application uses EJS for views and displays a glossary data table based on an array returned from a service. This glossary is designed to provide comprehensive definitions and explanations of various DevOps terms and concepts.

## Installation

Ensure you have Node.js and npm installed. Clone the repository and install the dependencies using the following commands:

```bash
git clone https://github.com/navindharmaraj/sit722-2023-t2-glossary
cd sit722-2023-t2-glossary
npm install
```
## Development
This project uses Nodemon for a smooth development experience. Nodemon automatically restarts the application whenever file changes are detected in the directory. To start the server in development mode, use the following command:

```bash
npm run devstart
```

This will start the server on localhost (usually http://localhost:3000 unless you've configured a different port). Any changes made to the source code will trigger a server restart.

## Usage
Visit the main page at http://localhost:3000 to view the glossary data table.

## Technologies
Node.js, 
Express.js, 
EJS, 
Nodemon (for development)