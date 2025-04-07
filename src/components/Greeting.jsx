//Task 1 - Create a New Component
import React from 'react';
function Greeting() { // Creates a Greeting Function
    return ( // creates a div that contains a header and a paragraph
        <div>
            <h2>Hello from the Greeting Component!</h2>
            <p>This is your first custom component in React.</p>
        </div> 
    );
}

export default Greeting; // exports the Greeting function so it can be used in other files