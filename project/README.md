# Full Stack Todo Application

A modern, responsive todo list application built with:

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Message Broker: MQTT
- Data Storage: Redis (cache) and MongoDB (persistent storage)

## Features

- Add tasks via MQTT messaging
- Store tasks in Redis cache with automatic overflow to MongoDB
- Fetch all tasks via HTTP API
- Responsive UI that works on mobile, tablet, and desktop
- Task prioritization and categorization

## Project Structure

```
├── server/              # Backend Node.js server
│   ├── index.js         # Main server file
│   └── mqtt-http-bridge.js # Bridge between HTTP and MQTT
├── src/                 # Frontend React application
│   ├── components/      # React components
│   ├── services/        # API services
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Main React component
│   └── main.tsx         # Entry point
├── .env                 # Environment variables
└── package.json         # Dependencies and scripts
```

## Prerequisites

- Node.js
- Redis server
- MongoDB server
- MQTT broker (e.g., Mosquitto)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Update the `.env` file with your configuration
4. Start the application: `npm run dev`

## Development

- Frontend development server: `npm run dev:frontend`
- Backend development server: `npm run dev:backend`
- Run both: `npm run dev`

## Architecture

This application follows a microservices architecture pattern:

1. Tasks are added by publishing messages to the `/add` MQTT topic
2. The backend stores tasks in Redis cache with the key `FULLSTACK_TASK_<YOUR_NAME>`
3. When the Redis cache exceeds 50 items, they are moved to MongoDB and the cache is cleared
4. Tasks can be retrieved via the `/fetchAllTasks` HTTP endpoint
5. The frontend communicates with the backend via HTTP API and simulated MQTT

## License

MIT