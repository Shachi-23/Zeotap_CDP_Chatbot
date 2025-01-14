# CDP Chatbot

A modern, interactive chatbot application designed to answer questions about Customer Data Platforms (CDPs) such as Segment, mParticle, and Lytics.

## Features

- Real-time chat interface with typing effect
- Animated bubble background
- Chat history sidebar
- Responsive design
- Server-side question matching and answering

## Technologies Used

- Frontend:
  - React
  - Axios for API calls
  - CSS3 with custom animations and glass-like design
- Backend:
  - Node.js
  - Express.js
  - CORS for cross-origin resource sharing

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Shachi-23/Zeotap_CDP_Chatbot.git
   ```

2. Navigate to the project directory:
   ```
   cd cdp-chatbot
   ```

3. Install dependencies for both frontend and backend:
   ```
   cd client && npm install
   cd ../server && npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the frontend application:
   ```
   cd client
   npm start
   ```

3. Open your browser and visit `http://localhost:3000` to use the application.

## Usage

- Type your question about Segment, mParticle, or Lytics in the input field.
- Press Enter or click the "Ask" button to submit your question.
- The chatbot will process your question and display the answer.
- Use the "Show History" button to view past conversations.

## Deployment

The application is deployed using Vercel:
- Frontend: https://zeotap-demo-client.vercel.app/
- Backend: https://zeotap-demo-server.vercel.app/

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

