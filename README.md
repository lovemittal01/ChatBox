# Chat Application

This repository contains the source code for a React-based Chat Application. The application provides a dynamic interface for users to interact with a chatbot. It uses Redux for state management and stores chat history in `localStorage` to ensure persistence across sessions.

---

## Features

- **Real-time Chat Interface**: Users can send messages and receive automated bot replies.
- **Typing Indicator**: Displays when the bot is responding.
- **Chat History**: Chat messages are stored locally to ensure continuity.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **User and Bot Differentiation**: Messages are styled differently based on the sender.
- **Error Handling**: Gracefully handles errors in state loading or message processing.

---

## Folder Structure

```
src
|-- components
|   |-- Chat
|   |   |-- Chat.jsx
|   |-- ChatWrapper
|   |   |-- ChatArea
|   |   |   |-- ChatArea.jsx
|   |   |-- InputArea
|   |   |   |-- InputArea.jsx
|   |   |-- Message
|   |   |   |-- Message.jsx
|   |   |-- TypingIndicator
|   |       |-- TypingIndicator.jsx
|   |-- Header
|   |   |-- Header.jsx
|-- reducer
|   |-- chatHistory.js
|-- store
|   |-- store.js
|-- assets
|   |-- user.png
|   |-- bot.png


---

## Technology Stack

- **Frontend**: React, TailwindCSS
- **State Management**: Redux Toolkit
- **Backend**: None (Simulated bot responses)
- **Storage**: LocalStorage (for chat persistence)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-application.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chat-application
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Solution for Storing Large Data

To handle large data efficiently, consider the following approaches:

### 1. **Database Integration**:
For production-ready applications, integrate a database (e.g., Firebase, MongoDB) to store chat histories securely and at scale.

### 2. **IndexedDB**:
Use IndexedDB, a low-level API for client-side storage of large amounts of structured data, including files and blobs:
```javascript
import { openDB } from 'idb';

const dbPromise = openDB('chat-app', 1, {
  upgrade(db) {
    db.createObjectStore('messages');
  },
});

export async function saveMessage(id, message) {
  const db = await dbPromise;
  await db.put('messages', message, id);
}

export async function getMessages() {
  const db = await dbPromise;
  return await db.getAll('messages');
}
```

### 3. **Backend API**:
Create an API endpoint to save and fetch messages:
```javascript
const saveMessageToServer = async (message) => {
  const response = await fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  return await response.json();
};
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes.
4. Push your branch and create a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

