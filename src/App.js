import React from "react";
import "./App.css";

function App() {
  return (
    <>
    <div>
        <h2 style={{textAlign: "center"}}>Kazon</h2>
        </div>
      <div className="parent" >
      
        <div className="child">
        <div className="Search-bar">
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="7"
            maxlength="50"
            size="30"
            placeholder="Search" // Add this line
          />
        </div>
        </div>
        <div className="child">
        <button>Sign in</button>
        </div>
      </div>
      <h3 style={{ backgroundColor: 'blue' }}>
        <button> Customer Service</button>
        <button>Best Sellers</button>
      </h3>
      <div>
      <ul class="flex-container">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
      </div>
    </>
  );
}

export default App;
