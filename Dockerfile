# Use the official slim Node 20 image
FROM node:20-slim

# Create and define the application directory
WORKDIR /usr/src/app

# Copy package configuration files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy the rest of your application code
COPY . .

# Expose the internal port to the container network
EXPOSE 8080

# Define the environment variable default
ENV PORT=8080

# Start the application
CMD [ "npm", "start" ]
