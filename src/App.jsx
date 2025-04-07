// Task 2 - Use the Component

import React from 'react'; // Importing React
import Greeting from './components/Greeting'; // Importing the Greeting component

function App() { // Creating the App function
  return ( // creates a div that contains the Greeting component
    <div>
    <Greeting></Greeting>
    </div>
  );
}
export default App; // exports the App function so it can be used in other files