import './App.css';

function App() {
  return (
    <div className="container">

      <h1 className="title">My React Profile</h1>

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="nature"
        className="image"
      />

      <div className="card">
        <h2>About Me</h2>

        <p>
          Hello! My name is Md Sazzad Hossain Sohag.
          I am learning React JS in Web Programming Practicum.
        </p>

        <p>
          React helps developers create interactive user interfaces
          efficiently and quickly.
        </p>
      </div>

      <div className="card">
        <h2>My Skills</h2>

        <p>✔ HTML</p>
        <p>✔ CSS</p>
        <p>✔ JavaScript</p>
        <p>✔ React JS</p>
      </div>

    </div>
  );
}

export default App;