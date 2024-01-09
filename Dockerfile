

#FROM node:14-alpine
#WORKDIR '/app'
#COPY package.json .
#RUN npm install
#COPY . .
#ENV NODE_OPTIONS="--no-warnings"
#EXPOSE 3000
#CMD ["npm", "start", "--no-warnings","--no-preset"]

# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies and clean up the npm cache
RUN npm install --quiet --no-cache --no-fund && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--no-warnings"

# Expose the port that your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]



