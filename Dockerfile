# Stage 1: Build the application
FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy all project files and build the application
COPY . .
RUN yarn build

# Stage 2: Serve the application
FROM node:18-alpine

WORKDIR /app

# Copy only the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the Next.js app port
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
