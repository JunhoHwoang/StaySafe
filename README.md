# ⚡SafeVolt

StaySafe is a comprehensive safety incident management system designed to help organizations track, analyze, and prevent workplace safety incidents.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React with TypeScript and Vite. It provides a user-friendly interface for viewing and interacting with safety incident data.

Key features:
- Dashboard with statistics and graphs
- List of safety incidents with filtering and sorting options
- Detailed view of individual incidents
- Dark mode support

Main components:
- `MainPage`: The main dashboard view
- `CardPage`: Detailed view of a single incident
- `SafetyCardList`: Displays a list of safety incidents
- `Graphs`: Visualizes incident data
- `FilterSort`: Allows users to filter and sort incidents

The frontend uses several UI components from the Shadcn UI library, customized for the application's needs.

### Backend

The backend is responsible for handling data storage, retrieval, and processing. It exposes API endpoints for the frontend to consume.

Key features:
- RESTful API for CRUD operations on safety incidents
- Data processing for statistics and analysis

## Getting Started

### Frontend

1. Navigate to the `front-end` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Backend

[Backend setup instructions to be added]

## API Endpoints

The frontend communicates with the backend through the following main endpoint:

- `GET http://localhost:8080/reports`: Retrieves all safety incident reports

## Customization

The project uses a custom theme that can be adjusted in the following file:
