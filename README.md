# React State & Lifecycle Demo

## 📌 Overview

This project is a simple React application built using a **class-based component** to demonstrate:

* State management in React
* Lifecycle methods (`componentDidMount`, `componentWillUnmount`)
* Conditional rendering
* Event handling
* Interval timers

The app displays a user profile that can be toggled on and off, while also tracking how long the component has been mounted.

---

## 🚀 Features

* 👤 Display a user profile (name, bio, image, profession)
* 🔁 Toggle profile visibility with a button
* ⏱️ Live timer showing how long the component has been mounted
* ⚛️ Demonstrates React class component lifecycle methods

---

## 🧠 Concepts Covered

### 1. State Management

The component maintains its own internal state:

```js
this.state = {
  person: {
    fullName: 'Aboje Ebute',
    bio: 'A passionate React developer.',
    imgSrc: 'image-url',
    profession: 'Full Stack web developer',
  },
  shows: false,
  timeElapsed: 0,
}
```

* `person`: Stores profile details
* `shows`: Controls whether the profile is visible
* `timeElapsed`: Tracks seconds since component mounted

---

### 2. Event Handling

A button toggles the visibility of the profile:

```js
toggleProfile() {
  this.setState((prevState) => ({
    shows: !prevState.shows
  }))
}
```

---

### 3. Conditional Rendering

The profile is only displayed when `shows` is `true`:

```js
{shows && (
  <section>
    ...
  </section>
)}
```

---

### 4. Lifecycle Methods

#### ✅ componentDidMount

* Runs after the component is added to the DOM
* Starts a timer that updates every second

```js
componentDidMount() {
  this.timer = setInterval(() => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1
    }))
  }, 1000)
}
```

---

#### ❌ componentWillUnmount

* Runs just before the component is removed
* Clears the timer to prevent memory leaks

```js
componentWillUnmount() {
  clearInterval(this.timer)
}
```

---

## 🖼️ UI Structure

* **Header**

  * React & Vite logos
  * App title

* **Main Section**

  * Toggle button
  * Profile card (conditionally rendered)

* **Footer**

  * Timer display

---

## 📂 Project Structure

```
project-root/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
└── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate into the project:

```bash
cd your-project-folder
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## ⚠️ Common Issues

### Vite Logo Import Error

If you see:

```
Failed to resolve import "/vite.svg"
```

Make sure:

* `vite.svg` exists inside the `public/` folder

OR update the import path:

```js
import viteLogo from "./assets/vite.svg";
```

---

## 🛠️ Technologies Used

* React (Class Components)
* Vite
* JavaScript (ES6)
* CSS

---

## 📖 Learning Outcome

By working with this project, you will understand:

* How to use **state in class components**
* How React **lifecycle methods** work
* How to handle **events and user interaction**
* How to implement **conditional rendering**

---

## 📌 Future Improvements

* Convert class component to functional component using hooks (`useState`, `useEffect`)
* Add animations when toggling profile
* Fetch profile data from an API
* Improve UI styling

---

## 👨‍💻 Author

**Aboje Ebute**
Full Stack Web Developer

---

## 📜 License

This project is open-source and available for learning purposes.
