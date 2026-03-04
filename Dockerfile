# Use a specific version of Node.js as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json (or package-lock.json using package*.json) first to leverage Docker's build cache
COPY package.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app listens on (e.g., 3000 for many Node.js apps)
EXPOSE 3000

# Command to run the application when the container starts
CMD ["node", "app.js"]
