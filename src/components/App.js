import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function about ()
{/* write an <About> component here */
return (
  <div id="about">
  <h1>About</h1>
</div>
)}


function App() {
  return (
    <div>
      <NavBar />

      {/* add the <Home> component here */}
      {/* add your <About> component here */<about/>}
    </div>
  );
}

export default App;
