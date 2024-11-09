# Task Management App

This is a task management application built with React. It allows users to add tasks, edit them, mark them as completed, and delete them. It also displays the number of completed tasks out of the total tasks in the task list.

<h3>Features</h3>

-	Add new tasks.
-	Edit task names.
-	Mark tasks as completed.
-	Delete tasks.
-	View the number of completed tasks and total tasks.

<h3>Tech Stack</h3>

-	React: For building the user interface.
-	JavaScript (ES6+): For logic and interactivity.
-	CSS/Tailwind CSS: For styling the components.

<h3>Installation</h3>

To run the project locally, follow these steps:<br><br>
	1.	Clone the repository: <br>
 
    git clone https://github.com/your-username/task-management-app.git

 <br>
 	2.	Navigate to the project directory:<br><br>
  
    cd task-management-app
    
  <br>
  3.	Install dependencies:
Make sure you have Node.js installed. Then run the following command to install the required dependencies:<br><br>

    npm install
    
<br>
	4.	Start the development server:
After the dependencies are installed, run:<br><br>

    npm run dev

  <br>
The app will be available at http://localhost:5173

<h3>Usage</h3>

-	Add a task: Type the task name in the input field and click the “+” button.
-	Mark a task as completed: Click the checkbox next to the task.
-	Edit a task: Click the edit icon next to a task to edit the task name.
-	Delete a task: Click the trash icon next to a task to mark it as deleted.
-	View Task Statistics: The “Task Done” section shows the number of completed tasks and total tasks.<br>

<h3>File Structure</h3>

    /src
    /Components
      AddTask.js        # Component for adding new tasks
      AllTasks.js       # Component for displaying and managing tasks
      TaskNumber.js     # Component for showing the task completion statistics
    /Tasks
      TaskList.js       # Task list data
    App.js              # Main App component
    index.js            # Entry point of the app
    index.css           # Global styles

<br>
<h3>Contribution</h3>

If you would like to contribute to the project, feel free to open an issue or submit a pull request.

<h4>Steps for contributing:</h4>

1.	Fork the repository.
2.	Create a new branch (git checkout -b feature-name).
3.	Commit your changes (git commit -am 'Add new feature').
4.	Push to the branch (git push origin feature-name).
5.	Open a pull request.