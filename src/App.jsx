import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * App is a class-based component that manages the profile state
 * and a mount-time interval timer.
 */
class App extends Component {
  /**
   * Constructor: Initializes the component's state.
   * @param {object} props - Component properties.
   */
  constructor(props) {
    super(props)
    
    // The state contains a Person object, a 'shows' boolean, 
    // and a counter for the time interval since mount.
    this.state = {
      person: {
        fullName: 'Aboje Ebute',
        bio: 'A passionate React developer.',
        imgSrc: 'https://media.istockphoto.com/id/1089489394/photo/freelance-programmer-working-on-computer-from-home.jpg?s=612x612&w=0&k=20&c=GHVXVDpYQHREWV_1PPOZEfaNOPKrvQC3mKRsUOekGlQ=', // Placeholder image URL
        profession: 'Full Stack web developer',
      },
      shows: false,
      timeElapsed: 0, // Time in seconds since the component was mounted
    }

    // Binding the toggle function to ensure 'this' refers to the class instance
    this.toggleProfile = this.toggleProfile.bind(this)
  }

  /**
   * Toggles the 'shows' property in the state.
   */
  toggleProfile() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }))
  }

  /**
   * Lifecycle method: Called immediately after the component is mounted.
   * Used here to start a timer that tracks the elapsed time.
   */
  componentDidMount() {
    // Start an interval that increments 'timeElapsed' every second
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }))
    }, 1000)
    
    console.log('Component mounted successfully.')
  }

  /**
   * Lifecycle method: Called just before the component is unmounted.
   * Used here to clean up the interval timer to avoid memory leaks.
   */
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      console.log('Component will unmount. Timer cleared.')
    }
  }

  /**
   * Render method: Defines the UI of the component.
   */
  render() {
    const { person, shows, timeElapsed } = this.state

    return (
      <div className="App">
        <header>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>React State & Lifecycle</h1>
        </header>

        <main className="card">
          {/* Button to toggle the profile display */}
          <button onClick={this.toggleProfile} className="toggle-btn">
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          {/* Conditional rendering based on 'shows' state */}
          {shows && (
            <section className="profile-container">
              <img 
                src={person.imgSrc} 
                alt={person.fullName} 
                className="profile-img" 
              />
              <div className="profile-info">
                <h2>{person.fullName}</h2>
                <p className="profession">{person.profession}</p>
                <p className="bio">{person.bio}</p>
              </div>
            </section>
          )}

          {/* Displaying the time elapsed since component mount */}
          <footer className="timer-display">
            <p>
              This component has been mounted for: 
              <strong> {timeElapsed} </strong> 
              second{timeElapsed !== 1 ? 's' : ''}.
            </p>
          </footer>
        </main>

        <p className="read-the-docs">
          Learn more about React lifecycle methods and state management.
        </p>
      </div>
    )
  }
}

export default App