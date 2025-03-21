# Stage 1: Build Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies (package.json first to cache dependencies)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary build artifacts from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public /app/node_modules ./

# Expose port
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]
