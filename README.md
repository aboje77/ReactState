React State Checkpoint
This project is a React application that demonstrates the use of Class-based Components, State management, and Lifecycle methods. It features a profile card with a toggle visibility button and a timer that tracks the time since the component was mounted.

Table of Contents
Features
Technologies Used
Project Structure
Setup and Installation
Core Concepts Demonstrated
Class-Based Components
State Management
Lifecycle Methods
Features
Profile Card: Displays a person's full name, bio, image, and profession.
Toggle Button: Allows the user to show or hide the profile card.
Mount Timer: Automatically tracks and displays the elapsed time since the component was mounted.
Responsive Design: Styled with CSS for a clean and modern look.
Technologies Used
React: Frontend library for building the user interface.
Vite: Modern build tool for fast development and optimized production builds.
JavaScript (ES6+): Modern JavaScript syntax and features.
CSS3: For styling and layout.
Project Structure
src/App.jsx: The main class-based component containing the logic and UI.
src/App.css: Custom styles for the application.
src/main.jsx: The entry point for the React application.
Setup and Installation
Clone the repository:

git clone <repository-url>
Navigate to the project directory:

cd react-state-checkpoint
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser and go to http://localhost:5173.

Core Concepts Demonstrated
Class-Based Components
The main application is built using a class-based structure, which was the standard before the introduction of React Hooks.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { /* ... */ };
  }
  // ...
}
State Management
The application uses the this.state object and this.setState() method to manage dynamic data such as profile visibility and the timer counter.

Lifecycle Methods
componentDidMount(): Used to initialize the interval timer when the component first appears in the DOM.
componentWillUnmount(): Used to clear the interval timer to ensure no memory leaks occur when the component is removed.
Created as part of the React State Checkpoint at GOMYCODE.