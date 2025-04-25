# React & Go Boilerplate Project

This repository contains the frontend and backend code for the React & Go Boilerplate project.

## Project Structure

- `frontend/`: Contains the frontend application code (Next.js)
  - `src/app/`: Next.js App Router pages
  - `src/components/`: Reusable UI components
    - `src/components/custom/`: Custom application-specific components
    - `src/components/ui/`: shadcn UI components
    - `src/components/layout/`: Layout components (Header, Footer, Sidebar, etc.)
  - `src/lib/`: Utility functions and shared code
  - `src/hooks/`: Custom React hooks
  - `src/types/`: TypeScript type definitions
  - `src/styles/`: Global styles and Tailwind configuration
- `backend/`: Contains the backend application code (Go)
  - `cmd/api/`: Entry point for the API server
  - `internal/`: Internal packages
    - `api/`: API handlers
    - `config/`: Configuration management
    - `database/`: Database connection and queries
    - `router/`: HTTP router setup

## Getting Started

### Prerequisites

- Node.js 18.17 or later and npm for the frontend
- Go for the backend
- PostgreSQL database

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:3000

### Backend Setup

1. **Database Setup**:
   - Install PostgreSQL if not already installed
   - Create a database named 'icai_udin'
   - The default configuration expects:
     - Host: localhost
     - Port: 5432
     - User: postgres
     - Password: postgres
     - Database: icai_udin

2. **Configuration**:
   - Configuration is managed through `backend/config.yaml`
   - Modify the settings as needed for your environment

3. **Run the Application**:
   ```bash
   cd backend
   go mod tidy
   go run cmd/api/main.go
   ```

## API Endpoints

### Hello API

- **URL**: `/api/v1/hello`
- **Method**: GET
- **Response**: 
  ```json
  {
    "message": "Hello from React & Go Boilerplate API",
    "status": "success"
  }
  ```

## Technology Stack

### Frontend
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn UI components
- Radix UI primitives
- ESLint and Prettier for code quality
- Husky and lint-staged for Git hooks

### Backend
- Go programming language
- Fiber framework for HTTP server
- PostgreSQL database with native SQL (no ORM)
- YAML-based configuration

## Database Connection

The backend uses connection pooling with the following default configuration:
- Max Open Connections: 25
- Max Idle Connections: 5
- Connection Max Lifetime: 5 minutes

## Gitignore

The `.gitignore` file is configured for:
- Go
- Vite
- Node.js
- IntelliJ IDEA
- VSCode
- React.js

This ensures that unnecessary files like build artifacts, dependencies, and IDE-specific files are not committed to the repository.
