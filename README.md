# Mission Possible - A Task Manager App📝

## Overview
**Mission Possible** is a full-stack task management app built with **React** and a custom **Express.js backend**. It helps users manage their to-dos with functionality to add, complete, and delete tasks — all with a fun, dynamic UI.

---

## 🚀 Features
- ✅ **View Tasks**: List of all tasks with title, description, and priority.
- ✅ **Add Tasks**: Create new tasks with optional description and priority level.
- ✅ **Mark as Complete/Undo**: Toggle task status; completed tasks are shown with a line-through and a ✅ tick.
- ✅ **Delete Tasks**: Remove a task permanently.
- ✅ **Backend Integration**: Tasks are stored and retrieved from a server using a RESTful API.
- ✅ **Data Persistence**: Task data is saved to a `tasks.json` file.
- ✅ **Dynamic Updates**: UI updates automatically after actions like add/delete/complete.
---
## 🛠️ Technologies Used

### Frontend:
- React (with Hooks)
- JavaScript
- CSS

### Backend:
- Node.js
- Express.js
- File system (`fs`)
- CORS for cross-origin requests
---
## Components

### `Task.jsx`
Displays a single task with:
- Title, description, and priority
- Buttons for ✅ Complete/Undo and 🗑️ Delete

### `Button.jsx`
Handles task creation with:
- Input fields for title, description, and priority
- Validation and form submission
- POST request to server
  
### `App.jsx`
Manages app-level state:
- Fetches tasks from backend
- Handles adding and deleting tasks
- Passes state and handlers to child components

---

## How to Run the Project

### Frontend

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd mission-possible
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the React app:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory:
   ```bash
   cd mission-possible-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server app:
   ```bash
   npm run dev
   ```
4. The backend runs on http://localhost:5000

## Usage Instructions
1. **View Tasks**: All tasks are displayed on the main screen.
2. **Mark as Complete/Undo**: Click the "Complete" button to mark a task as complete or "Undo" to revert it.
3. **Delete Tasks**: Click the "Delete" button to remove a task from the list.

---

## ✨ What I Learned ✨
- How to manage component state in React using useState and useEffect
- How to send GET, POST, DELETE requests using fetch()
- How to build a simple Express server with file-based storage using fs
- How to lift state up and pass down props to child components
- How to separate concerns with reusable components like Task and Button
- How to create dynamic UIs that respond to backend data in real time

## Future Enhancements
- ~~Add functionality to add new tasks dynamically.~~ ✔️
- ~~Persist tasks using a backend or local storage.~~ ✔️
- Improve the UI with additional styling / animations.
- Add filter feature to search for specific tasks.
- Add due dates / reminders.
- Drag and drop to reorder tasks.

## License
This project is open-source and available for anyone to use or modify.

---

Enjoy managing your tasks!

