# Step 1: Use official lightweight Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files first
COPY package*.json ./

# Step 4: Install only production dependencies
RUN npm install --production

# Step 5: Copy the rest of the code
COPY . .

# Step 6: Expose the app port
EXPOSE 10000

# Step 7: Start the backend
CMD ["npm", "start"]
