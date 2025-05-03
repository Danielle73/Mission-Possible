# Mission Possible - A Task Manager App

## Overview
This Task Manager app is a simple React-based application designed to help users manage their tasks efficiently. Users can mark tasks as completed, delete tasks, and view a list of tasks with varying priorities and descriptions.

## Features
- **View Tasks**: Displays a list of tasks with details such as name, description, priority, and completion status.
- **Mark as Complete/Undo**: Toggle tasks as completed or incomplete, with visual feedback (e.g., line-through on completed tasks).
- **Delete Tasks**: Remove tasks from the list permanently.
- **Dynamic Updates**: The task list updates dynamically to reflect changes such as deletions or completions.

## Technologies Used
- **React**: Frontend library for building the user interface.
- **JavaScript**: Programming language for logic and interactivity.
- **CSS**: Styling for visual design and layout.

## Components

### Task.jsx
Responsible for rendering individual tasks with:
- Task name
- Description
- Priority
- Buttons for "Complete/Undo" and "Delete."

### TaskList.jsx
Handles:
- Displaying the list of tasks.
- Managing state for all tasks.
- Passing props like `deleteTask` and task details to `Task` components.

### taskData.js
Contains dummy task data in the following format:
```javascript
const tasks = [
  { id: 1, name: "Task 1", description: "Description 1", priority: "High", completed: false },
  { id: 2, name: "Task 2", description: "Description 2", priority: "Medium", completed: true },
];
export default tasks;
```

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-directory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Usage Instructions
1. **View Tasks**: All tasks are displayed on the main screen.
2. **Mark as Complete/Undo**: Click the "Complete" button to mark a task as complete or "Undo" to revert it.
3. **Delete Tasks**: Click the "Delete" button to remove a task from the list.

## Future Enhancements
- ~~Add functionality to add new tasks dynamically.~~ ✔️
- ~~Persist tasks using a backend or local storage.~~ ✔️
- Improve the UI with additional styling or animations.

## License
This project is open-source and available for anyone to use or modify.

---

Enjoy managing your tasks!

