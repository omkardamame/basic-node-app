# Basic Node App

A simple Node.js application that listens on **port 3000** and returns
the message **"Hello from DevOps pipeline!"** when accessed via a web
browser.

------------------------------------------------------------------------

## 🚀 Features

-   Lightweight HTTP server built with Node.js
-   Exposes port **3000**
-   Returns the message: "Hello from DevOps pipeline!"
-   Automatically detects and prints the local network IPv4 address
-   Includes a **Dockerfile** for containerized deployment

------------------------------------------------------------------------

## 🛠️ Run Locally

### 1. Install Node.js

Make sure Node.js is installed:

```bash
node -v
```

### 2. Start the application

```bash
node app.js
```

The server will display the local network address in the console, for
example:
```bash
Server running at http://192.168.0.201:3000/
```
You can access it using:

-   http://localhost:3000\
-   http://`<your-local-ip>`:3000

------------------------------------------------------------------------

## 🐳 Run with Docker

### 1. Build the image

``` bash
docker build -t basic-node-app:latest .
```

### 2. Run the container

``` bash
docker run -dit --name basic-node-app -p 3000:3000 basic-node-app:latest
```

Now open:

-   http://localhost:3000\
-   http://`<your-local-ip>`{=html}:3000

------------------------------------------------------------------------

## 📦 Project Structure

    .
    ├── app.js
    ├── Dockerfile
    └── README.md

------------------------------------------------------------------------

## 📌 Purpose

This project demonstrates:

-   Building a basic Node.js HTTP server
-   Network interface detection using the OS module
-   Exposing port 3000
-   Preparing the application for containerized deployment using Docker
-   Foundation for CI/CD and DevOps pipeline experimentation
